const mongoose=require('mongoose');

const tryStructure=mongoose.Schema({
    name:String,
    email:String,
        mobile:String,
        address1:String,
        address2:String,
        pincode:String,
        state:String,
        country:String,
        year:String,
        degree:String,
        college:String,
        company:String,
        goal:String,
        kind:String


   
   
})

const tryModal=mongoose.model("multiple",tryStructure)
module.exports=tryModal;