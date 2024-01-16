import { Introduction } from "./minipostmanComponents/Introduction";
import { GetRequestSection } from "./minipostmanComponents/GetRequestSection";
import { PostRequestSection } from "./minipostmanComponents/PostRequestSection";
import { InformationSection } from "./minipostmanComponents/InformationSection";
import { Postman } from "./minipostmanComponents/Postman";

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

			<Postman />

			<div style={bodyStyle}>
				<InformationSection />

				<GetRequestSection />

				<PostRequestSection />
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
