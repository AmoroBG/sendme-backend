const dotenv = require("dotenv")

// LOAD CONFIG
dotenv.config({ path: "./config.env" })

const sendGridApiKey = process.env.SENDGRID_API_KEY
const dbURL = process.env.DATABASE_URI
const jwtSecret = process.env.JWT_KEY
const config = {
    sendGridApiKey, dbURL, jwtSecret
}
module.exports = config