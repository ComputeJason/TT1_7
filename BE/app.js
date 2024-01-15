const minipostmanRouter = require(`./routes/minipostmanRouter`);

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(morgan("dev"));
app.use(cors());

app.use("/api/minipostman", minipostmanRouter);

app.listen(PORT, (error) => {
	if (!error) {
		console.log(`Server is Running listening on port ${PORT}`);
	} else {
		console.log(`Server Cannot start. Error occured: ${error}`);
	}
});
