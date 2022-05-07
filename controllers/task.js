// REQUIRE PACKAGES
const express = require("express");
// REQUIRE MODULES - INTERNAL
const Task = require("../models/task");

//Create Task  - /tasks/task/create - POST
exports.createTask = function (req, res) {
            // create task
            const task = new Task({
              taskName: req.body.taskName,
              taskDescription: req.body.taskDescription,
           
            
            });

            task
              .save()
              .then(function () {
                res.status(200).json({
                  message: "Task Created successfully",
                });
              })
              .catch(function (err) {
                res.status(500).json({
                  error: err,
                });
              });
          }
      
   

//Get all Tasks - GET - "/tasks"
exports.getTasks=function(req, res){
  Task.find().then(function(foundTasks){
    res.status(200).json({
      foundTasks
    })
  }).catch(function(err){
    res.status(500).json({
      Error:err
    })
  })
}
// Get one Task - GET - "/tasks/:taskId"
exports.getTask=function(req, res){
Task.findById(req.params.taskId).then(function(foundTask){
  res.status(200).json(foundTask)
}).catch(function(err){
  res.status(500).json({
    Error:err
  })
})
}
// Delete all Tasks - DELETE - "/tasks"
exports.deleteTasks = function (req, res) {
  Task.remove()
    .then(function () {
      res.status(200).json({
        message: "All Tasks successfully deleted",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
// Delete one Tasks - DELETE - "/tasks/:taskId"
exports.deleteTask = function (req, res) {
  Task.findByIdAndRemove(req.params.taskId)
    .then(function () {
      res.status(200).json({
        message: "Task deleted",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
// Update all records a Task - PUT - "/tasks"
exports.updateTaskRecords = function (req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    {
        taskName: req.body.taskName,
        taskDesciption: req.body.taskDesciption,
    },
    { new: true }
  )
    .then(function () {
      res.status(201).json({
        message: "Task records updated",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
// Update a specific record of a task - PATCH - "/tasks/:taskId"
exports.updateSomeTaskRecords = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, { $set: req.body })
    .then(function () {
      res.status(201).json({
        message: "Task record updated",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
