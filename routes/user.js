// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const router = express.Router();
// REQUIRE MODULES - INTERNAL
const user = require("../controllers/user");

router.post("/register", user.registerUser);
router.get("/", user.getUsers)
router.get("/:userId", user.getUser)
router.delete("/", user.deleteUsers)
router.delete("/:userId", user.deleteUser)
router.put("/:userId", user.updateUserRecords)
router.patch("/:userId", user.updateUserRecords)
router.post("/login", user.userLogin)
router.get("/logout", user.userLogout)

module.exports = router;
