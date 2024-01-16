import React, { useState } from "react";
import { TextField, Button, Stack, Divider, Switch } from "@mui/material";
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
		<div
			style={{
				paddingBottom: "2rem",
				paddingTop: "1rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				flexDirection: "column",
			}}
		>
			<Divider />
			<React.Fragment>
				<h3>
					{" "}
					------------------------------ Enter GET / POST endpoints to test!
					------------------------------
				</h3>
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
					<Stack>
						<TextField
							type="text"
							variant="outlined"
							color="secondary"
							placeholder="http://localhost:4000/api/minipostman/firstGetRequest"
							label="Request Endpoint"
							onChange={(e) => {
								setEndpointURL(e.target.value);
							}}
							value={endpointURL}
							fullWidth={true}
							required
							style={{ paddingBottom: "1rem", width: "40rem" }}
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
					</Stack>
				</form>

				<pre>{requestResponse}</pre>
			</React.Fragment>
		</div>
	);
};
