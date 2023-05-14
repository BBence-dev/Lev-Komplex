const express = require('express');
const userController = require('./../controllers/user.Controller');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllusers)
  .post(userController.createuser);

router
  .route('/:id')
  .get(userController.getuser)
  .patch(userController.updateuser)
  .delete(userController.deleteuser);

module.exports = router;
