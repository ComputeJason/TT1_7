exports.getAdminInstructions = (req, res, next) => {
	res.status(200).json({
		status: "success",
		results: "This is DA WAE to use this",
	});
};
