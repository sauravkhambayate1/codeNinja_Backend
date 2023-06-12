const express = require('express')
const route = express.Router()
const {registerController, loginController, testController} = require('../Controller/authController')
const {requireSignIn} = require('../middlewares/middleware')


route.post('/register', registerController)

// Login Route
route.post('/login', loginController)
route.get('/test',requireSignIn,  testController)

module.exports = route