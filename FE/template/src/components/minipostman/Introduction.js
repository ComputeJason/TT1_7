export const Introduction = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				flexDirection: "column",
			}}
		>
			<h1> 🤓 MiniPostman 😄</h1>

			<h5 style={{ marginTop: "-0.5rem" }}>
				Hey there! This page is meant to be an instructive template.
			</h5>
			<h5 style={{ marginTop: "-1rem" }}>
				Boilerplate codes for a React FE and a Node Express BE have been set up
				so You Don't Have To!
			</h5>
			<h5 style={{ marginTop: "-1rem" }}>
				Examples of integration can be seen below. Do read on for a better
				understanding!
			</h5>
			<h5 style={{ marginTop: "-1rem" }}>
				(* Ensure BE is running on port 4000 first)
			</h5>
		</div>
	);
};
