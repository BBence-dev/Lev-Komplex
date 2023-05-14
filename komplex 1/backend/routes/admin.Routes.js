const express = require('express');
const adminController = require('./../controllers/admin.Controller');

const router = express.Router();

router
  .route('/')
  .get(adminController.getAlladmins)
  .post(adminController.createadmin);

router
  .route('/:id')
  .get(adminController.getadmin)
  .patch(adminController.updateadmin)
  .delete(adminController.deleteadmin);

module.exports = router;
