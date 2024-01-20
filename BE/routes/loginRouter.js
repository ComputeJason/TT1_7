const express = require("express");
const loginController = require("../controllers/loginController");

const loginRouter = express.Router();
loginRouter.route("/").post(loginController.loginRequest);
module.exports = loginRouter;
