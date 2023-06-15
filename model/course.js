const mongoose=require('mongoose');

const courseStructure=mongoose.Schema({
    id:String,
    email:String,
    course: String,
    title: String,
    title2: String,
    img: String,
    time: String,
    problem: String,
    ratings: String,
    count: String,
    price: String,
    detailhead: String, 
    detailcontent: String,
    detailurl: String,


   
   
})

const courseModal=mongoose.model("course",courseStructure)
module.exports=courseModal;