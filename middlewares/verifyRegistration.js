const User = require("../models/user");

const checkDuplicateAccounts = (req, res, next) => {

    User.findOne({
        email: req.body.email.toLocaleLowerCase()
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Phone Number is already in use!" });
            return;
        }

        next();
    });
};

module.exports = checkDuplicateAccounts
