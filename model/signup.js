const mongoose=require('mongoose');

const signUpStructure=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    mobile:Number,
})

const signupModal=mongoose.model("signin",signUpStructure)
module.exports=signupModal;