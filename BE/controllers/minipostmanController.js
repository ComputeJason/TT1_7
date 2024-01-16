// Code to execute business logic from requests

exports.firstGetRequest = (req, res, next) => {
	res.status(200).json({
		status: "success",
		message:
			"Congratz you did your first GET request! This message came from the Backend you are running! Your FE and BE are communicating.",
		endpoint: "/firstGetRequest",
		extraMessage:
			"You successfully called the API:  /api/minipostman/firstGetRequest",
	});
};

exports.firstPostRequest = (req, res, next) => {
	const inputName = req.body.name;
	const inputAge = req.body.age;

	res.status(200).json({
		status: "success",
		message: `Hi ${inputName}! You look young for someone ${inputAge}`,
		endpoint: "/firstPostRequest",
	});
};
