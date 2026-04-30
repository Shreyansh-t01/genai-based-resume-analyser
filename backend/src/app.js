const express = require('express')
const app  = express()
const authRouter= require("./Routes/auth.Routes")
const cookieParser = require('cookie-parser')



app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


app.use("/api/auth",authRouter)



app.use(express.json())


module.exports = app