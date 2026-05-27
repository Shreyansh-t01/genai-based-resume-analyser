const express = require('express')
const {upload} = require('../Service/fileUploading')
const {isUserSigned} = require('../Middlewares/authMiddleware')
const interviewRouter = express.Router()

const {uploadHandler, getInterviewReportById, getReports} = require('../Controller/interviewController')

//POST ROUTE
interviewRouter.post('/upload',isUserSigned , upload.single('resumePDF'),uploadHandler)

// getinterviewreportBy id route

interviewRouter.get('/reports/:reportId',isUserSigned,getInterviewReportById)

//getallreports
interviewRouter.get('/getreports',isUserSigned,getReports)


module.exports = {
    interviewRouter
}