const Destination = require("../models/Destination");

exports.getAllDestinationsByCountryId = async (req, res, next) => {
	try {
		const countryId = req.params.countryId;
		console.log(countryId);

		const allDestinations = await Destination.findAll({
			attributes: ["id", "country_id", "cost", "name", "notes"],
			where: {
				country_id: countryId,
			},
		});

		// console.log(allDestinations);

		res.status(200).json({
			status: "success",
			data: allDestinations,
		});
	} catch (err) {
		console.log(err);

		res.status(200).json({
			status: "error",
			message: "unexpected error occured",
		});
	}
};

exports.createDestination = async (req, res) => {
	// Get POST request body
	const destination = req.body;
	console.log(destination);
	// Persist into Database

	const newDestination = await Destination.create(destination);
	console.log(newDestination);

	res.status(200).json({
		status: "success",
		data: "",
	});
};

exports.deleteDestination = async (req, res) => {
	try {
		const idToBeDeleted = req.params.id;

		const deletedDestination = await Destination.destroy({
			where: {
				id: idToBeDeleted,
			},
		});

		console.log(deletedDestination);

		if (deletedDestination === 1) {
			res.status(200).json({
				status: "success",
				message: "successfully deleted",
			});
		} else {
			res.status(200).json({
				status: "error",
				message: "destination doesn't exist",
			});
		}
	} catch (err) {
		console.log(err);
	}
};

exports.editDestination = async (req, res) => {
	try {
		const idToBeEditted = req.params.id;
		const { name, notes, cost } = req.body;

		const edittedDestination = await Destination.update(
			{ name: name, notes: notes, cost: cost },
			{
				where: {
					id: idToBeEditted,
				},
			}
		);

		console.log(edittedDestination);

		res.status(200).json({
			status: "success",
			message: "successfully editted",
		});
	} catch (err) {
		console.log(err);
	}
};
