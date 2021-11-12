const express = require('express');
const productController = require('./../Controllers/productController');

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.addProduct);

// router to handle requests with productid given
router
  .route('/productId/:id')
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

// router to handle filter requests
router.route('/filter').get(productController.getFilteredProducts);

module.exports = router;
