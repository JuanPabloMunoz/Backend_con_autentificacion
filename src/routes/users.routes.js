const express = require('express');
const auth = require('../middleware/authorization.js');
const {sigin, login, loginVerification, modifyUserById} = require('../controllers/user.controller.js');

const userRouter = express.Router();

userRouter.post('/sigin', sigin); //localhost:3000/api/v1/users/sigin
userRouter.post('/login', login);//localhost:3000/api/v1/users/login
userRouter.get('/loginVerification', auth, loginVerification);//localhost:3000/api/v1/users/loginVerification
userRouter.put('/:id', modifyUserById);//localhost:3000/api/v1/users/:id
    

module.exports = userRouter;