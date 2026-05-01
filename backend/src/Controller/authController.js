 const mongoose = require('mongoose')
 const userModel = require('../Models/userModel.')
 const blackListModel = require('../Models/blackListModel')
 const jwt = require('jsonwebtoken')
 const bcrypt  = require('bcrypt')
 const env = require('dotenv')
 

const registerUser =  async (req,res)=>{
  const {username,password,email} =req.body

  console.log(req.body)

  if(!username || !email || !password){
  
    res.status(400).json({
        message: "fill out all the fields"
    })
  }

else {const isAlreadyUser  = await userModel.findOne({
        $or:[{email},{username}]
        })

        if(isAlreadyUser){
        res.status(400).json({
            message:"user is already registered please login to proceed"
        })
        }

        const hash = await bcrypt.hash(password,10)
        console.log(hash);

        const user =  await userModel.create({
        username,
        email,
        password:hash
        })

        const token = jwt.sign({
                id:user.id,
                username:user.username
                },
                process.env.JWT_SECRET,
                {expiresIn:"1d"}
        )
        res.cookie("token",token)

        res.status(201).json({
        message:"user is registered succesfully",
        userdetails:{
            username:user.username,
            
            email:user.email
        }
})

}}
     
const loginUser = async  (req,res)=>{
   const {email,password} = req.body

   const user = await userModel.findOne({email})

   if(!user){
    res.status(400).json({
        message: "no user is found"
    })
   }
   else {
    const isPasswordCorrect = bcrypt.compare(password,user.password)
    if(isPasswordCorrect){
        const token = jwt.sign({
            id:user.id,
                username:user.username
        },process.env.JWT_SECRET,{
            expiresIn:"1d"
        })
         res.cookie("token",token)

        res.status(201).json({
            message:"user has logged in successfully"
        })
    }
    else res.status(401).json({
    message:"userlogin failed, try some different password"
   })
   }
}

const logoutUser = async (req,res)=>{
    const token = req.cookies.token
    console.log(token)
    if(token){
        const blacklist = await blackListModel.create({
            token
        })
    }


    res.clearCookie();
    res.status(201).json({
        message:"user logged out successfully"
    })

  
}

const getMe = async (req,res)=>{
     
    
     
const user = await userModel.findById(req.user.id)

if(user){
    res.status(200).json({
        message:"user credentials are available",
        username:user.username,
        email:user.email,
        
    })
}
else{
    res.status(400).json({
        message:"user credentials not found"
    })
}
}
module.exports ={
    registerUser,
    loginUser,
    logoutUser,
    getMe
}