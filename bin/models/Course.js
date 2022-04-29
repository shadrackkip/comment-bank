const mongoose = require("mongoose");

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        max: 65, 
        trm:true,
        required: [true, 'Course name is required']
    },
    userId:{
        type:String,
        required: [true, 'User Id is required']
    } 
},{ timestamps: true })

module.exports = mongoose.model("Course", courseSchema);