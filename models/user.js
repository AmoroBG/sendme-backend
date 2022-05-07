// REQUIRE PACKAGES - EXTERNAL
const mongoose = require("mongoose");

const userSchema={
    firstName:{
        type:String,
        require:true,
        trim:true
    }, 
    lastName:{
        type:String,
        require:true,
        trim:true
    },
       phone:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    },
    
    role:{
        type:String,
        enum: ["normal", "admin"],
        default:"normal"
    },
    
    dateCreated:{
        type:Date,
        default:Date.now
    }
}
const User=mongoose.model("User", userSchema)
module.exports=User
