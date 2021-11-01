const express = require('express');
const userController = require('./../Controllers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUsers).post(userController.addUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router
  .route('/:id/cart')
  .get(userController.getCart)
  .patch(userController.updateCart)
  .delete(userController.deleteCart);

module.exports = router;
