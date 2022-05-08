const jwt = require("jsonwebtoken")
const config = require( "../config");

const getUserIdFromToken = (req) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, config.jwtSecret);
    return decodedToken.userId
}

module.exports = getUserIdFromToken