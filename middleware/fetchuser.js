const jwt = require('jsonwebtoken')
const user = require('../models/userschema')
const dotenv = require('dotenv')

dotenv.config({path:'./congfig.env'})

const fetchuser = async(req,res,next)=>{
   try {
    const token = req.header('token')
    const getuser = jwt.verify(token , process.env.SECRET)
    const getuserdetaills = await user.findById({_id:getuser._id})
    console.log(getuserdetaills);
    userdetail = getuserdetaills
    next()
   } catch (error) {
    console.log(error);
   }
}
module.exports=fetchuser