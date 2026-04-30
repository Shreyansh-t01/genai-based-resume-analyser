const mongoose = require('mongoose')


const blackListSchema = mongoose.Schema({
    token:{
        type : String,
        required:[true,"token is required to be black listed"]
    }
    
},{
    timestamps:true
})

const blackListModel = mongoose.model("blacklistedTokens",blackListSchema)
module.exports = blackListModel