const express = require('express');
const productController = require('./../controllers/product.Controller');

const router = express.Router();

router
  .route('/')
  .get(productController.getAllproducts)
  .post(productController.createproduct);

router
  .route('/:id')
  .get(productController.getproduct)
  .patch(productController.updateproduct)
  .delete(productController.deleteproduct);

module.exports = router;
