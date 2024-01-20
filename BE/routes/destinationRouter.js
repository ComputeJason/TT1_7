const express = require("express");
const destinationController = require("../controllers/destinationController");

const destinationRouter = express.Router();

destinationRouter
	.route("/destination")
	.get(destinationController.getAllDestinations);

destinationRouter
	.route("/destination/:userId/:")
	.get(destinationController.getAllDestinationsOfIteneraryByUserId);

destinationRouter
	.route("/destination/:id")
	.get(destinationController.getDestinationById)
	.post(destinationController.createDestination)
	.delete(destinationController.deleteDestination)
	.patch(destinationController.editDestination);

module.exports = destinationRouter;
