import { Divider } from "@mui/material";

export const InformationSection = () => {
	const removeWhiteSpace = { marginBottom: "-0.5rem" };

	return (
		<div>
			<Divider />
			<h2 style={removeWhiteSpace}>1) Basic Info </h2>

			<h3 style={removeWhiteSpace}> BE (Express)</h3>

			<p style={removeWhiteSpace}>
				- To start BE, navigate to BE folder, then use command "nodemon app.js".
				(nodemon is a devtool to auto-restart server on save)
			</p>

			<p style={removeWhiteSpace}>
				- Entry point app.js contains middleware to aid in basic web dev
				functionalities like logging API usage & blocking CORS error
			</p>

			<p style={removeWhiteSpace}>
				- Code flow goes as follows. Requests -{">"} app.js -{">"} routers -
				{">"}
				controllers
			</p>

			<p style={removeWhiteSpace}>
				- Business logic & interactions with DB happens in the controllers. Data
				Access Objects (DAO) to be created in "models" folder
			</p>

			<h3 style={removeWhiteSpace}> FE (React)</h3>

			<p style={removeWhiteSpace}>
				- To start FE, navigate to FE/template folder, then use command "npm
				start"
			</p>
			<p style={removeWhiteSpace}>
				- Simple routing done in index.js with package 'react-router-dom'
				installed. Feel free to overhaul it to implementing your own routing
				design.
			</p>
			<p style={removeWhiteSpace}>
				- No state management packages implemented. Feel free to implement Redux
				or use the Context API!
			</p>
			<p style={removeWhiteSpace}>
				- Material UI (MUI) already installed for ready-built aesthetic
				components.
			</p>
			<p style={removeWhiteSpace}>
				- axios already installed to interact with RESTFUL APIs.
			</p>
		</div>
	);
};
