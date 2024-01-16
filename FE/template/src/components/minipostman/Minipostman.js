import { Introduction } from "./Introduction";
import { GetRequestSection } from "./GetRequestSection";
import { PostRequestSection } from "./PostRequestSection";
import { InformationSection } from "./InformationSection";
import { Postman } from "./Postman";

export const Minipostman = () => {
	const bodyStyle = {
		display: "flex",
		alignItems: "start",
		justifyContent: "start",
		height: "100%",
		flexDirection: "column",
		paddingLeft: "2rem",
	};

	return (
		<>
			<Introduction />

			<div style={bodyStyle}>
				<InformationSection />

				<GetRequestSection />

				<PostRequestSection />

				<Postman />
			</div>
		</>
	);
};

// basic info
// File Structure?
// BE downlaoded packages and what they do
// BE useful packages
// FE downlaoded packages and what they do
// FE useful packages

// GET
// FIRST GET REQUEST button -> click and then display message
// Generate Random Dog button

// POST --> some explain
// input name
// input adjective
// submit button post request
// show message that came from the Backend.
