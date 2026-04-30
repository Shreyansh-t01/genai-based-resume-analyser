const mongoose = require('mongoose')

const ConnectToDb = ()=>{
    mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("mongodb connected")
}


module.exports = ConnectToDb