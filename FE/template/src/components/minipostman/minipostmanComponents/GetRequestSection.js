import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Divider } from "@mui/material";

export const GetRequestSection = () => {
	const [firstGetRequestMessage, setFirstGetRequestMessage] = useState("");
	const [isfirstGetRequestButtonClicked, setIsfirstGetRequestButtonClicked] =
		useState(false);
	const [firstGetRequestButtonContent, setFirstGetRequestButtonContent] =
		useState("FIRST GET REQUEST");

	const [dogImageUrl, setDogImageUrl] = useState("");

	const getFirstGetRequestHandler = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/api/minipostman/firstGetRequest"
			);
			setIsfirstGetRequestButtonClicked(true);
			setFirstGetRequestButtonContent(response.data.extraMessage);
			setFirstGetRequestMessage(response.data.message);
		} catch (error) {
			console.log(error);
			setFirstGetRequestMessage("*WARNING: YOUR BE IS NOT RUNNING*");
		}
	};

	const fetchDogImageHandler = async () => {
		try {
			const response = await axios.get(
				"https://dog.ceo/api/breeds/image/random"
			);
			setDogImageUrl(response.data.message);
		} catch (error) {
			console.error("Error fetching dog image:", error);
		}
	};

	useEffect(() => {}, []);

	return (
		<div style={{ paddingTop: "1rem" }}>
			<Divider />
			<h2>2) GET Request Demo</h2>

			<Button
				variant="contained"
				onClick={getFirstGetRequestHandler}
				disabled={isfirstGetRequestButtonClicked}
			>
				{" "}
				{firstGetRequestButtonContent}
			</Button>

			<p>{firstGetRequestMessage}</p>

			<div style={{ display: "flex", flexDirection: "row" }}>
				<Button variant="contained" onClick={fetchDogImageHandler}>
					New Dog Please
				</Button>

				<p>( Public Online Dog Image API GET request )</p>
			</div>

			<div style={{ marginTop: "2rem" }}>
				{dogImageUrl && (
					<img src={dogImageUrl} alt="Dog" height="400px" length="400px" />
				)}
			</div>
		</div>
	);
};
