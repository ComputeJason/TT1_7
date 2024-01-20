const minipostmanRouter = require(`./routes/minipostmanRouter`);
const loginRouter = require(`./routes/loginRouter`);
const itineraryRouter = require(`./routes/Itinerary`);
const countryRouter = require(`./routes/countryRouter`);
const itinerarydestinationRouter = require(`./routes/itinerarydestinationRouter`);


const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 4000;

// MIDDLEWARE STACK

// 1) Simple logger into console when API hit
app.use(morgan("dev"));

// 2) Bypass CORS Error when integrating with Frontend
app.use(cors());

// 3) Express tool to allow dev to access body of incoming POST requests
app.use(express.json());

app.use("/api/minipostman", minipostmanRouter);
app.use("/login", loginRouter);
app.use("/itineraryRouter",itineraryRouter)
app.use("/api/countries", countryRouter);
app.use("/api/itinerarydestination", itinerarydestinationRouter);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Running. Listening for request on port ${PORT}`);
    } else {
        console.log(`Server Cannot start. Error occured: ${error}`);
    }
});
