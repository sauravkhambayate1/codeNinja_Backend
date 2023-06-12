const JWT = require('jsonwebtoken')
const comparePass = require('../helpers/authHelper')
const userModel = require('../model/userModel.js')


 const registerController = async(req,res)=>{
  try{
   const {name, email, password, phone, address} = req.body

   if(!name){
    return res.send({message: "Name is required"})
   }
   if(!email){
    return res.send({message: "email is required"})
   }
   if(!password){
    return res.send({message: "Password is required"})
   }
   if(!phone){
    return res.send({message: "phone is required"})
   }
   if(!address){
    return res.send({message: "address is required"})
   }
   

   const existingUser = await userModel.findOne({email})
   
//    Existing user
   if(existingUser){
    return res.status(200).send({
        success:true,
        message: "Already Register Please Login again"
    })
   }

//    Registering the user
   const hashPassword = await comparePass.hashPass(password)
//    save
     const user =await new userModel({name, email, password: hashPassword, phone, address}).save()
     

     res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user
     })


  }catch(error){
  console.log(error)
  res.status(500).send({
    success: false,
    message: "Error in Registeration",
    error
  })
  }
}

// POST Login
 const loginController = async(req, res)=>{
   try{
   const {email, password} = req.body

//    Validation
     if(!email || !password){
        return res.status(404).send({
            success:true,
            message: "Invalid email or password",
        })
     }

     const user = await userModel.findOne({email})
     if(!user){
        res.status(404).send({
            success:false,
            message: "Email is not registered",
            error
    
          })
     }
     const match = await comparePass.comparePass(password, user.password)
     if(!match){
        return res.status(200).send({
            success: false,
            message: "Invalid Password"
        })
     }

    //  token
    const token = await JWT.sign({_id: user.id}, process.env.Secret_Key)
    res.status(200).send({
        success: true,
        message: "Login successfully",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            // role: user.role
        },
        token: token
    })
   } catch(error){
      console.log(error)
      res.status(500).send({
        success:false,
        message: "Error in Login",
        error

      })
   }
}

// test Controller

const testController = (req,res)=>{
   res.send("protected routes");
}

module.exports = {
   registerController, loginController, testController
}