const {userModel} = require('../model/userModel.js')


// Protected Routes token base
 const requireSignIn = async(req, res, next)=>{
    try{
        const decode  = JWT.verify(req.headers.authorization, process.env.Secret_Key)
        req.user = decode
        next()
    }catch(error){
       console.log(error);
    }
}

 

// user middleware
 const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User access denied" });
  }
  next();
};
module.exports = {
    userMiddleware, requireSignIn
}