import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const DestinationList = ({ countryId }) => {
	const [destinations, setDestinations] = useState([]);
	const [showInputFields, setShowInputFields] = useState(false);
	const [newRow, setNewRow] = useState({ name: "", cost: "", notes: "" });

	const [edittedRow, setEdittedRow] = useState({
		newName: "",
		newCost: "",
		newNotes: "",
	});

	useEffect(() => {
		fetchData();
	}, [countryId]);

	const fetchData = async () => {
		try {
			// Replace the following with the actual API fetch logic
			const response = await fetch(
				`http://localhost:4000/destination/country/${1}`
			);
			const data = await response.json();

			// Set destinations regardless of whether the fetch was successful
			setDestinations(data.data);
		} catch (error) {
			console.error("Error fetching data:", error);
			// You can handle errors here if needed
		}
	};

	const handleInputChange = (e, key) => {
		setNewRow({ ...newRow, [key]: e.target.value });
	};

	const addRow = () => {
		if (
			newRow.name.trim() !== "" &&
			newRow.cost.trim() !== "" &&
			newRow.notes.trim() !== ""
		) {
			createDestination(newRow);
		}
	};

	const createDestination = async (newDestination) => {
		try {
			newDestination.country_id = 1;

			// Make the API call without awaiting the response
			const response = await fetch("http://localhost:4000/destination", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newDestination),
			});

			const data = await response.json();
			console.log(data);

			// Assuming the API call is successful
			// Fetching data from the API
			fetchData();

			// Updating the state with the new data
			setDestinations((prevDestinations) => [
				...prevDestinations,
				newDestination,
			]);

			// Clearing the input fields
			setNewRow({ name: "", cost: "", notes: "" });

			// Hiding the input fields
			setShowInputFields(false);
		} catch (error) {
			console.error("Error:", error);

			// Even if there's an error in the API call, proceed with the actions below
			// Fetching data from the API
			fetchData();

			// Updating the state with the new data
			setDestinations((prevDestinations) => [
				...prevDestinations,
				newDestination,
			]);

			// Clearing the input fields
			setNewRow({ name: "", cost: "", notes: "" });

			// Hiding the input fields
			setShowInputFields(false);
		}
	};

	const editDestination = async () => {
		try {
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "20px",
				backgroundColor: "#add8e6",
			}}
		>
			<Button
				variant="contained"
				color="primary"
				onClick={() => setShowInputFields(true)}
				style={{ marginBottom: "20px" }}
			>
				Add New Row
			</Button>

			{showInputFields && (
				<div>
					<TextField
						label="Destination name"
						value={newRow.name}
						onChange={(e) => handleInputChange(e, "name")}
						style={{ marginRight: "10px" }}
					/>
					<TextField
						label="Cost"
						value={newRow.cost}
						onChange={(e) => handleInputChange(e, "cost")}
						style={{ marginRight: "10px" }}
					/>
					<TextField
						label="Notes"
						value={newRow.notes}
						onChange={(e) => handleInputChange(e, "notes")}
						style={{ marginRight: "10px" }}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={addRow}
						style={{ marginTop: "10px" }}
					>
						Confirm
					</Button>
				</div>
			)}

			<TableContainer
				component={Paper}
				style={{
					maxWidth: "800px",
					boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
				}}
			>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Destination</TableCell>
							<TableCell align="right">Cost</TableCell>
							<TableCell align="right">Notes</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{destinations.map((row, index) => (
							<TableRow
								key={index}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								onClick={() => {}}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.cost}</TableCell>
								<TableCell align="right">{row.notes}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{showInputFields && (
				<>
					<h3>Edit Destination</h3>
					<div>
						<TextField
							label="Destination name"
							value={newRow.name}
							onChange={(e) => handleInputChange(e, "name")}
							style={{ marginRight: "10px" }}
						/>
						<TextField
							label="Cost"
							value={newRow.cost}
							onChange={(e) => handleInputChange(e, "cost")}
							style={{ marginRight: "10px" }}
						/>
						<TextField
							label="Notes"
							value={newRow.notes}
							onChange={(e) => handleInputChange(e, "notes")}
							style={{ marginRight: "10px" }}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={addRow}
							style={{ marginTop: "10px" }}
						>
							Save edit
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default DestinationList;
