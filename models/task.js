// REQUIRE PACKAGES - EXTERNAL
const mongoose = require("mongoose");
const  Schema = mongoose.Schema
const taskSchema = new Schema({
    name:{
        type:String,
        require:true
    }, 
    description:{
        type:String,
        require:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    creator: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }
    
})
const Task=mongoose.model("Task", taskSchema)
module.exports=Task
