const express = require('express')
const {upload} = require('../Service/fileUploading')
const {isUserSigned} = require('../Middlewares/authMiddleware')
const interviewRouter = express.Router()

const {uploadHandler} = require('../Controller/interviewController')

//POST ROUTE
interviewRouter.post('/upload',isUserSigned , upload.single('resumePDF'),uploadHandler)


module.exports = {
    interviewRouter
}