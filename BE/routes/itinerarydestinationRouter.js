// Code to Route / Redirect action to the corresponding business logic

const express = require("express");
const itinerarydestinationController = require("../controllers/itinerarydestinationController");

const itinerarydestinationRouter = express.Router();

itinerarydestinationRouter
	.route("/:id")
	.get(itinerarydestinationController.getDestinationNameByItineraryId);

module.exports = itinerarydestinationRouter;