const express = require("express");
const minipostmanController = require("../controllers/minipostmanController");

const minipostmanRouter = express.Router();

minipostmanRouter
	.route("/adminInstructions")
	.get(minipostmanController.getAdminInstructions);

module.exports = minipostmanRouter;
