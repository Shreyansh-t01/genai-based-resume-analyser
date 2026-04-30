const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    username :{
        type:String,
        unique:[true,"username is already taken"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"this email is already registered to our system please login"]
    },
    password:{
        type:String,
        required:true
    }
})


const userModel = mongoose.model("users",userSchema)
module.exports = userModel