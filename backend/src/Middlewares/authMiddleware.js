const blackListModel = require('../Models/blackListModel')
const jwt  = require('jsonwebtoken')
const env = require('dotenv')



const isUserSigned =  async(req,res,next)=>{
const token = req.cookies.token;

if(!token){
    res.status(401).json({
        message:"Unauthorised access"
    })
}
const isBlackListed = await blackListModel.findOne({token})

if(isBlackListed){
    res.status(401).json({
        message:"unauthorised access ! token has expired please login again"
    })
}

    try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    
    req.user = decoded
   
    next()
    console.log("kaise hai app sb")
}catch(err){
    res.status(401).json({
        message:"invalid auth token"
    })
}





}

module.exports = {isUserSigned}