import React, { useState } from "react";
import { TextField, Button, Stack, Divider } from "@mui/material";
import axios from "axios";

export const PostRequestSection = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [firstPostRequestMessage, setFirstPostRequestMessage] = useState("");

	const onNameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const submitPostRequest = async (event) => {
		event.preventDefault();

		const payload = {
			name: name,
			age: age,
		};

		try {
			const res = await axios.post(
				"http://localhost:4000/api/minipostman/firstPostRequest",
				payload
			);

			setFirstPostRequestMessage(res.data.message);
		} catch (error) {
			console.log(`Error occured: ${error}`);
		}
	};

	return (
		<div>
			<Divider />
			<h2>3) POST Request Demo </h2>

			<React.Fragment>
				<h3>Send Input to the Backend Dynamically</h3>
				<form onSubmit={submitPostRequest}>
					<Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
						<TextField
							type="text"
							variant="outlined"
							color="secondary"
							label="First Name"
							onChange={onNameChangeHandler}
							value={name}
							fullWidth
							required
						/>
						<TextField
							type="text"
							variant="outlined"
							color="secondary"
							label="Age"
							onChange={(e) => setAge(e.target.value)}
							value={age}
							fullWidth
							required
						/>
					</Stack>

					<Stack direction={"row"}>
						<Button variant="outlined" color="secondary" type="submit">
							Send Post Request
						</Button>
						<p style={{ paddingLeft: "6rem" }}>
							<b>{firstPostRequestMessage}</b>
						</p>
					</Stack>
				</form>
			</React.Fragment>
		</div>
	);
};
