const express = require("express");
const userRoute = new express.Router();
const User = require('../controller/userController')



userRoute.post('/create',User.createUser);
userRoute.get('/',User.findUsers);
userRoute.get('/:id',User.findUser)
userRoute.put('/:id',User.updateUser)
userRoute.delete('/:id',User.deleteUser)
////////////////////////////////////////
userRoute.patch('/:id',User.updateUserFields) 

module.exports = userRoute