const express = require("express");
const destinationController = require("../controllers/destinationController");

const destinationRouter = express.Router();

destinationRouter.route("/").post(destinationController.createDestination);

destinationRouter
	.route("/country/:countryId")
	.get(destinationController.getAllDestinationsByCountryId);

destinationRouter
	.route("/:id")
	.delete(destinationController.deleteDestination)
	.patch(destinationController.editDestination);

module.exports = destinationRouter;
