// REQUIRE PACKAGES
const express = require('express')
const path=require("path")
const dotenv = require('dotenv')
// INTERNAL MODULES
const dbconnect = require("./dbconnection")
const userRoutes=require("./routes/user")
const taskRoutes=require("./routes/task")

// LOAD CONFIG
dotenv.config({ path: 'config.env' })

// INITIALIZE APP
const app = express()
// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

// DB CONNECTION
dbconnect

// MIDDLEWARE
// body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ROUTES
app.get("/", function(req, res){
  res.sendFile("index.html")
})
app.use("/users", userRoutes)
app.use("/tasks", taskRoutes)


// SERVER
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`)
})
