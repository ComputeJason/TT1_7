import React, { useState } from "react";
import {
	TextField,
	Button,
	Container,
	Stack,
	Divider,
	Switch,
} from "@mui/material";
import axios from "axios";

export const Postman = () => {
	const [endpointURL, setEndpointURL] = useState("");
	const [isGetRequest, setIsGetRequest] = useState(true);
	const [requestResponse, setRequestResponse] = useState("");
	const [postRequestPayload, setPostRequestPayload] = useState("");

	const onSubmitRequestHandler = async (e) => {
		e.preventDefault();

		let res = "";

		try {
			if (isGetRequest) {
				res = await axios.get(endpointURL);
			} else {
				res = await axios.post(endpointURL, JSON.parse(postRequestPayload));
			}

			const data = res.data;

			setRequestResponse(JSON.stringify(data, null, 2));
		} catch (error) {
			if (error?.response?.status === 404) {
				setRequestResponse(
					"ERROR 404. Request not Found. Endpoint with that URL or METHOD does not exist."
				);
			} else if (error?.message === "Network Error") {
				setRequestResponse(
					"NETWORK ERROR. Please check if your server is running"
				);
			} else {
				setRequestResponse(`ERROR Occured. ${error.message}`);
			}
			console.log(error);
		}
	};

	return (
		<div style={{ paddingBottom: "7rem", paddingTop: "1rem" }}>
			<Divider />
			<h2>4) Postman </h2>

			<React.Fragment>
				<h3>Enter GET / POST endpoints to test!</h3>
				<form onSubmit={onSubmitRequestHandler}>
					<Stack direction={"row"}>
						<p style={{ color: "green" }}>
							{" "}
							<b>GET</b>{" "}
						</p>
						<div style={{ paddingTop: "0.5rem" }}>
							<Switch
								color={"error"}
								checked={!isGetRequest}
								onChange={() => {
									setIsGetRequest(!isGetRequest);
								}}
								inputProps={{ "aria-label": "controlled" }}
							/>
						</div>

						<p style={{ color: "red" }}>
							{" "}
							<b>POST</b>{" "}
						</p>
					</Stack>
					<TextField
						type="text"
						variant="outlined"
						color="secondary"
						label="Request Endpoint"
						onChange={(e) => {
							setEndpointURL(e.target.value);
						}}
						value={endpointURL}
						fullWidth
						required
						style={{ paddingBottom: "1rem" }}
					/>

					{!isGetRequest && (
						<TextField
							multiline={true}
							placeholder='{"name": "Jason"}'
							rows={10}
							type="text"
							variant="outlined"
							color="secondary"
							label="POST Request Payload"
							onChange={(e) => {
								setPostRequestPayload(e.target.value);
							}}
							value={postRequestPayload}
							fullWidth
							required
							style={{ paddingBottom: "1rem" }}
						/>
					)}

					<Button variant="contained" color="secondary" type="submit">
						Send Request
					</Button>
				</form>

				<pre style={{ paddingLeft: "6rem" }}>{requestResponse}</pre>
			</React.Fragment>
		</div>
	);
};
