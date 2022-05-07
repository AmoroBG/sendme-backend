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
    //    taskOwner:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     default:null
    // },
    dateCreated:{
        type:Date,
        default:Date.now
    }
    
}
const Task=mongoose.model("Task", taskSchema)
module.exports=Task
