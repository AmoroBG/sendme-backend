// REQUIRE PACKAGES - EXTERNAL
const mongoose = require("mongoose");
const  schema = mongoose.Schema
const taskSchema={
    taskName:{
        type:String,
        require:true
    }, 
    taskDescription:{
        type:String,
        require:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    userId: {
        type: schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }
    
}
const Task=mongoose.model("Task", taskSchema)
module.exports=Task
