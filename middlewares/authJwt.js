const jwt = require("jsonwebtoken")
const config = require( "../config");
const User = require("../models/user")

const verifyToken = async(req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, config.jwtSecret);
      console.log("decoded", decodedToken)  
      await User.find({id: decodedToken.userId })
      .then(async user => {
          if(!user){
              return res.status(400).send({'error': 'Invalid user ID'})
          }
          else{
              next()
          }
      })
    } catch {
      res.status(401).json({
        error: 'Unauthorized!'
      });
    }
};

module.exports = verifyToken
