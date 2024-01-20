// Code to Route / Redirect action to the corresponding business logic

const express = require("express");
const itinerarydestinationController = require("../controllers/itinerarydestinationController");

const itinerarydestinationRouter = express.Router();

itinerarydestinationRouter
	.route("/destinations/:id")
	.get(itinerarydestinationController.getDestinationNameByItineraryId);

itinerarydestinationRouter
	.route("/:id")
	.get(itinerarydestinationController.getItineraryDestinationById);

itinerarydestinationRouter
	.route("/:id")
	.delete(itinerarydestinationController.deleteItineraryDestination);

module.exports = itinerarydestinationRouter;