const mongoose = require('mongoose')

const technicalQuestion = new mongoose.Schema({
    question: String,
    intention:String,
    answer : String
},{
    _id:false
})

const behavioralQuestion = new mongoose.Schema({
     question: String,
    intention:String,
    answer : String
},{
    _id:false
})

const skillGap = new mongoose.Schema({
    skills:{
        type:String,
        require:[true,"skills are required"]
    
    },
    severity:{
        type:String,
        enum:["low","high","medium"],
        require:[true,"severity is required"]
    }
})

const prepPlan = new mongoose.Schema({
    day:{
        type: Number,
        require: [true,"day is required"]
    },
    focus:{
        type:String,
        require:[true,"focus is required"]
    },
    task:[{
        type:String,
        require:[true,"task is required"]
    }]
})


const interviewReportSchema = new mongoose.Schema({

    jobDescription:{
        type:String,
        require:[true,"job description is required"]


    },
    resume:{
      type:String,
      
    },
    selfDescription:{
        type:String
    },
    technicalQuestions:[technicalQuestion],
    behavioralQuestion:[behavioralQuestion],
    skillGaps:[skillGap],
    preparationPlan:[prepPlan],
    matchScore:{
        type:Number,
        min:0,
        max:100
    }
})