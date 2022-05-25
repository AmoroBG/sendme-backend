const verifyToken = require("./authJwt");
const verifySignUp = require( "./verifyRegistration");
const middleWare = {
    verifySignUp, verifyToken
}
module.exports =  middleWare
