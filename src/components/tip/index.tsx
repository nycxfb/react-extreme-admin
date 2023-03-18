import React from "react";

interface Props extends componentProps {}

const Index = (props: Props) => {
	const { children } = props;

	return <div>{children}</div>;
};

export default Index;
