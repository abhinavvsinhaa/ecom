const db = require("../db-initialize");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({path: "../config.env"});

const privateKey = process.env.PRIVATE_KEY

const getMyCart = (req, res, next) => {
    //if token is verified run query using callback
    function verifyToken (callback) {
        const token = req.token;
        //verify token
        jwt.verify(token, privateKey, (err, decoded) => {
            if (err) {
                res.json({
                    message: "Error in verifying JWT token",
                    error: err
                })
                return;
            } else {
                const user = decoded.user;
                db.query('SELECT cart_id FROM ecom.user WHERE email=?', [user.email], (err, db_res, fields) => {
                    if (err) {
                        res.json({
                            message: "Error in finding cart id from email, after token is decoded",
                            error: err
                        });
                        res.end();
                    } else {
                        if (db_res.length > 0) {
                            callback({
                                verified: true,
                                decoded: decoded,
                                customer: {
                                    email: user.email,
                                    cartId: db_res[0].cart_id
                                }
                            })     
                        } else {
                            res.json({
                                message: "Can't find any cart id with email id" + user.email
                            });
                            res.end();
                        }
                    }
                })      
            }
        })
    }

    verifyToken(token => {
        if (token.verified === true) {
            const customer = token.customer;
            const cartId = customer.cartId;
            //run query to get all the products in my cart
            db.query("SELECT productid, quantity FROM ecom.cart WHERE cartid=?", [cartId], (err, cart, fields) => {
                if (err) {
                    res.json({
                        message: "Error in finding products with cartid" + cartId,
                        error: err
                    });
                    res.end();
                } else {
                    if (cart.length > 0) {
                        res.json({
                            message: "Products found",
                            products: cart
                        })
                    } else {
                        res.json({
                            message: "No item present in the cart",
                            products: []
                        });
                        res.end();
                    }
                }
            })
        }
    })
}

const addToCart = (req, res, next) => {
    //if token is verified run query using callback
    function verifyToken (callback) {
        const token = req.token;
        //verify token
        jwt.verify(token, privateKey, (err, decoded) => {
            if (err) {
                res.json({
                    message: "Error in verifying JWT token",
                    error: err
                })
                return;
            } else {
                const user = decoded.user;
                db.query('SELECT cart_id FROM ecom.user WHERE email=?', [user.email], (err, db_res, fields) => {
                    if (err) {
                        res.json({
                            message: "Error in finding cart id from email, after token is decoded",
                            error: err
                        });
                        res.end();
                    } else {
                        if (db_res.length > 0) {
                            callback({
                                verified: true,
                                decoded: decoded,
                                customer: {
                                    email: user.email,
                                    cartId: db_res[0].cart_id,
                                },
                                request: req
                            })     
                        } else {
                            res.json({
                                message: "Can't find any cart id with email id" + user.email
                            });
                            res.end();
                        }
                    }
                })      
            }
        })
    }

    verifyToken((token) => {
        if (token.verified === true) {
            console.log(token.request.body)
            let cartId = token.customer.cartId;
            let productId = token.request.body.productId;
            let size = token.request.body.size;

            function searchProductInCart(callback) {
                let searchQuery = 'SELECT sno, quantity FROM ecom.cart WHERE cartid = ? AND productid = ? AND size = ?'

                db.query(searchQuery, [cartId, productId, size], (err, productInCart, fields) => {
                    if (err) {
                        res.json({
                            message: "Error in searching product",
                            error: err
                        })
                        res.end();
                    } else if (productInCart) {
                        if (productInCart.length > 0) {
                            callback(productInCart[0]);
                        } else {
                            callback(false);
                        }
                    }
                })
            }


            searchProductInCart(product => {
                if (product) {
                    let query = "UPDATE ecom.cart SET quantity=?+1 WHERE sno=?"

                    db.query(query, [product.quantity, product.id], (err, update, fields) => {
                        if (err) {
                            res.json({
                                message: "Error in updating product quantity",
                                error: err
                            })
                            res.end();
                        } else if (update) {
                            res.json({
                                message: "Product added in cart",
                                type: "updated exisiting quantity"
                            })
                            res.end();
                        }
                    })
                } else if (product === false){
                    let values = [cartId, productId, 1, size];
                    let query = 'INSERT INTO ecom.cart(cartid, productid, quantity, size) VALUES(?)';
                    db.query(query, [values], (err, db_res, fields) => {
                        if (err) {
                            res.json({
                                message: "Error in adding product",
                                error: err
                            })
                            res.end();
                        } else if (db_res) {
                            res.json({
                                message: "Product added in cart",
                                type: "inserted new"
                            })
                            res.end();
                        }
                    })
                }
            })
        }
    })
}

module.exports = {getMyCart, addToCart}

//token for xyz@gmail.com
//pass test 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoieHl6QGdtYWlsLmNvbSIsImlhdCI6MTYzNzk5NzQ0NH0sImlhdCI6MTYzNzk5NzQ0NCwiZXhwIjoxNjQwNTg5NDQ0fQ.yOiVhZ6HIJtUMyUMNMfO22trzfBmDTHKSLnDvBQrLeA



