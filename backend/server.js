const app = require('./src/app')
const env = require('dotenv').config()
const connectToDb = require('./src/config/database')
const {generateResponse} =require('./src/Service/ai.service')


connectToDb()

app.listen(process.env.PORT,function(){
  
    console.log(`backend is listening on ${process.env.PORT}`)
})