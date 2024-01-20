exports.getAllDestinations = (req, res, next) => {
	res.status(500).json({
		status: "error",
		message: "Route not yet defined!",
	});
};

exports.getAllDestinationsByCountryId = (req, res, next) => {
	const countryId = req.params.countryId;

	const allDestinations = db.getDestinationsByCountryId(countryId);

	res.status(200).json({
		status: "error",
		message: "Route not yet defined!",
	});
};

exports.getDestinationById = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "Route not yet defined!",
	});
};

exports.createDestination = (req, res) => {
	// Get POST request body
	const newDestination = req.body;

	// Persist into Database
	const res = db.createNewDestination();

	console.log(res);

	res.status(200).json({
		status: "success",
		data: res,
	});
};

exports.deleteDestination = (req, res) => {
	const destinationIdToDelete = req.params.id;

	// Persist into Database
	const res = db.createNewDestination();

	console.log(res);

	res.status(200).json({
		status: "success",
		data: res,
	});

	res.status(500).json({
		status: "error",
		message: "Route not yet defined!",
	});
};

exports.editDestination = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "Route not yet defined!",
	});
};
