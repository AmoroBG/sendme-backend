// REQUIRE PACKAGES - EXTERNAL
const mongoose = require("mongoose");

const taskSchema={
    taskName:{
        type:String,
        require:true
    }, 
    taskDescription:{
        type:String,
        require:true
    },
    // userId: {
    //     type: schema.Types.ObjectId, 
    //     required: false, 
    //     ref: 'User'},
    dateCreated:{
        type:Date,
        default:Date.now
    }
    
}
const Task=mongoose.model("Task", taskSchema)
module.exports=Task
