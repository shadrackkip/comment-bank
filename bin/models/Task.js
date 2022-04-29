const mongoose = require("mongoose");

const taskSchema=mongoose.Schema({
    title:{
        type:String,
        min: 3,
        max: 65, 
        trim:true,
        required: [true, 'Your name is required']
    },
    course:{
        type:String,
        max: 65, 
        trim:true,
        required: [true, 'Course is required']
    },
     userId:{
        type:String,
        trim:true,
        required: [true, 'User is required']
    },
    
},{ timestamps: true })

module.exports = mongoose.model("Task", taskSchema);