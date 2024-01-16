// Code to Route / Redirect action to the corresponding business logic

const express = require("express");
const minipostmanController = require("../controllers/minipostmanController");

const minipostmanRouter = express.Router();

minipostmanRouter
	.route("/firstGetRequest")
	.get(minipostmanController.firstGetRequest);

minipostmanRouter
	.route("/firstPostRequest")
	.post(minipostmanController.firstPostRequest);

module.exports = minipostmanRouter;
