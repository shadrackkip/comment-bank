const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        min: 3,
        max: 65, 
        trm:true,
        required: [true, 'Your name is required']
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
    Password:{
        type:String,
        min:6,
        required: 'Password is required',
    },
  
},{ timestamps: true })
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
module.exports = mongoose.model("User", userSchema);