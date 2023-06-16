const mongoose = require('mongoose')
const url="mongodb+srv://sauravkhambayate221:Saurav123@cluster0.d9nult5.mongodb.net/codeNinja?retryWrites=true&w=majority"

const connect = async()=>{
    try{
      await mongoose.connect(url)
      console.log("Connected to the database");
    }
    catch(error){
       console.log("Error occured in connecting to the database", error);
    }
}

module.exports = connect;
