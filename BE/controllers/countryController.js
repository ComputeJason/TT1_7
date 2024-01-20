// Code to execute business logic from requests
const Country = require('../models/Country');

exports.getAllCountries = async (req, res, next) => {
	// res.status(200).json({
	// 	status: "success",
	// 	message:
	// 		"Get all countries.",
	// 	endpoint: "/",
	// 	extraMessage:
	// 		"Get all countries",
	// });
	try {
        const countries = await Country.findAll();
		//console.log(countries)
        res.json(countries);
    } catch (err) {
        console.error(`Error while getting countries`, err.message);
        next(err);
    }
};