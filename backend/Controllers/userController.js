const db = require('../db-initialize');
const randomstring = require("randomstring");

exports.getAllUsers = (req, res, next) => {};
exports.addUser = (req, res, next) => {    
    console.log(req.body)
    let cartId = req.body.email.split("@")[0] + "-cart-" + randomstring.generate({
        length: 5,
        charset: 'alphabetic'  
    })
    let wishlistId = req.body.email.split("@")[0] + "-wishlist-" + randomstring.generate({
        length: 5,
        charset: 'alphabetic'
    })
    let userDetails = [req.body.email, req.body.name, req.body.password, cartId, wishlistId,"user"];

    db.query("INSERT INTO ecom.user VALUES(?)", [userDetails], (err, db_res, fields) => {
        if (err) console.log(err);
        res.json("User added");
    })

};
exports.getUser = (req, res, next) => {};
exports.updateUser = (req, res, next) => {};
exports.deleteUser = (req, res, next) => {};
exports.getCart = (req, res, next) => {};
exports.updateCart = (req, res, next) => {};
exports.deleteCart = (req, res, next) => {};
