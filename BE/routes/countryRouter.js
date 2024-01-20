// Code to Route / Redirect action to the corresponding business logic

const express = require("express");
const countryController = require("../controllers/countryController");

const countryRouter = express.Router();

countryRouter
	.route("/")
	.get(countryController.getAllCountries);

module.exports = countryRouter;