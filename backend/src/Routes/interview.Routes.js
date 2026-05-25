const express = require('express')
const {upload} = require('../Service/fileUploading')
const interviewRouter = express.Router()

const {uploadHandler} = require('../Controller/interviewController')

//POST ROUTE
interviewRouter.post('/upload',upload.single('resumePDF'),uploadHandler)


module.exports = {
    interviewRouter
}