const db = require('../db-initialize');
const randomstring = require("randomstring");

exports.getAllUsers = (req, res, next) => {};
exports.addUser = (req, res, next) => {  
    // check if the user previously exists or not 
    const findUser = (callback) => {
        db.query("SELECT email FROM ecom.user WHERE email=?", [req.body.email], (err, db_res, fields) => {
            if (err) throw err;
            if (db_res) {
                callback(true);
            } else 
                callback(false);
        })
    }

    findUser(response => {
        // if user already exists
        if (response === true) {
            res.status(200).json(`User found with email id: ${req.body.email}`);
            return;
        } 
        // if user doesn't exists create a user in the database
        else {
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
                res.status(200).json("User added");
            })
        }
    })
};

exports.findUser = (req, res, next) => {
    function checkIfUserExists(callback) {
        db.query("SELECT * FROM ecom.user WHERE email=?", [req.body.email], (err, db_res, fields) => {
            if (err) throw err;
            if (db_res) {
                callback(true)
            } else {
                callback(false)
            }
        })
    }

    checkIfUserExists(response => {
        if (response === true) {
            db.query("SELECT password FROM ecom.user WHERE email=?", [req.body.email], (err, db_res, fields) => {
                if (err) throw err;
                res.json({
                    password: db_res[0].password
                })
                return;
            }) 
        } else {
            res.json(`No user found with email address: ${req.body.email}`);
        }
    })
}
 
exports.getUser = (req, res, next) => {};
exports.updateUser = (req, res, next) => {};
exports.deleteUser = (req, res, next) => {};
exports.getCart = (req, res, next) => {};
exports.updateCart = (req, res, next) => {};
exports.deleteCart = (req, res, next) => {};
