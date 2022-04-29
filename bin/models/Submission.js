const mongoose = require("mongoose");

const submssionSchema=mongoose.Schema({
    Task:{
        type:String,
        max: 65, 
        trm:true,
        required: [true, 'Task  is required']
    },
    Student_name:{
        type:String,
        max: 65, 
        trm:true,
        required: [true, 'Task  is required']
    },
    StudentId:{
        type:String,
        required: [true, 'Student Id is required']
    },
     userName:{
        type:String,
        required: [true, 'User name is required']
    },
    userId:{
        type:String,
        required: [true, 'User Id is required']
    },
     userComment:{
        type:String,
        required: [true, 'Comment is required']
    },
},{ timestamps: true })

module.exports = mongoose.model("Submssion", submssionSchema);