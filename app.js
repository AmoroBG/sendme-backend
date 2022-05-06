// REQUIRE PACKAGES
const express = require('express')

// INTERNAL MODULES


// LOAD CONFIG


// INITIALIZE APP
const app = express()
// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

// DB CONNECTION


// MIDDLEWARE
// body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ROUTES
app.get("/", function(req, res){
  res.sendFile("index.html")
})



// SERVER
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`)
})
