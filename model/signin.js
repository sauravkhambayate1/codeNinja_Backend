const mongoose=require('mongoose');

const signinStructure=mongoose.Schema({
    email:String,
    password:String,
})

const signinModal=mongoose.model("sign",signinStructure)
module.exports=signinModal;