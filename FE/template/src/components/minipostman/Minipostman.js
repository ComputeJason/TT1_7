import { useEffect, useState } from "react";
import axios from "axios";

export const Minipostman = () => {
	const [adminInstructions, setAdminInstructions] = useState("hello");

	useEffect(() => {
		const getAdminInstructions = async () => {
			const response = await axios.get(
				"http://localhost:4000/api/minipostman/adminInstructions"
			);
			console.log(response);
			setAdminInstructions(response.data.results);
		};
		getAdminInstructions();
	}, []);

	return (
		<>
			<h1>{adminInstructions}</h1>
		</>
	);
};
