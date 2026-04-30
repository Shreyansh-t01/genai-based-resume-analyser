const app = require('./src/app')
const env = require('dotenv').config()
const connectToDb = require('./src/config/database')


connectToDb()

app.listen(process.env.PORT,function(){
    console.log(`backend is listening on ${process.env.PORT}`)
})