const express = require('express');
const cartController = require("../Controllers/cartController");

const router = express.Router();

const getToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        //403 - Forbidden
        res.status(403);
        res.json({
            status: 403,
            message: "Bearer header is missing or undefined"
        })
        res.end();
    }
}

router.use('/', getToken)

router.route('/')
.get(cartController.getMyCart);

module.exports = router;