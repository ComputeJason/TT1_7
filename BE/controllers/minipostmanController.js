// Code to execute business logic from requests

const User = require("../models/User");

exports.firstGetRequest = async (req, res, next) => {
    const users = await User.findAll();
    res.send(users[0]);
};

exports.firstPostRequest = (req, res, next) => {
    const inputName = req.body.name;
    const inputAge = req.body.age;

    res.status(200).json({
        status: "success",
        message: `Hi ${inputName}! You look young for someone ${inputAge}`,
        endpoint: "/firstPostRequest",
    });
};
