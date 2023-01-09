const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');

userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);
userRouter.get('/', userController.getAllUser);
userRouter.get('/currentuser', userController.getCurrentUser);
userRouter.post('/', userController.Signup);
userRouter.get('/:userId', userController.getUserAndDevices)

module.exports = userRouter;
