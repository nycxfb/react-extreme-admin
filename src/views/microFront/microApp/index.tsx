import React from "react";

const Index = () => {
	return (
		<div>
			<div className={"base-application"}>主应用</div>
			<micro-app name="app1" url="http://localhost:3000/" baseroute="/my-page" />
		</div>
	);
};

export default Index;
