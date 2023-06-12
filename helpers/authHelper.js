const bcrypt = require('bcrypt')

 const hashPass = async (password)=>{
    try{
      const saltRound = 10
      const hashPassword = await bcrypt.hash(password, saltRound) 
      return hashPassword
    }
    catch(err){
        console.log(err)
    }
};

const comparePass = async(password, hashPassword) =>{
    return bcrypt.compare(password, hashPassword)
}

module.exports = {
   comparePass, hashPass
}
  
