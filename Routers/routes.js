const express=require('express')
const route=express();
const order=require('../payment/payment')
const signController=require('../Controller/authController');
route.post('/signup',signController.signUpController);
route.post('/signin',signController.signinController);
route.post('/create/order',order.createOrder)
route.post("/api/payment/verify",order.orderVerify)
route.post("/update",signController.updateController)
route.post('/usercourse',signController.courseDetail)
route.post('/multiple',signController.tryController)
module.exports=route;