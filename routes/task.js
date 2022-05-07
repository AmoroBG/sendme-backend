// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const router = express.Router();
// REQUIRE MODULES - INTERNAL
const task = require("../controllers/task");

router.post("/create", task.createTask);
router.get("/", task.getTasks)
router.get("/:taskId", task.getTask)
router.delete("/", task.deleteTasks)
router.delete("/:taskId", task.deleteTask)
router.put("/:taskId", task.updateTaskRecords)
router.patch("/:taskId", task.updateSomeTaskRecords)


module.exports = router;
