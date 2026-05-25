const express = require('express')
const app  = express()
const {authRouter}= require("./Routes/auth.Routes")
const {interviewRouter} = require('./Routes/interview.Routes')
const cookieParser = require('cookie-parser')

const cors = require('cors')



app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:`http://localhost:5173`,
    credentials:true
}))


app.use("/api/auth",authRouter)
app.use('/api/interview',interviewRouter)



app.use(express.json())


module.exports = app