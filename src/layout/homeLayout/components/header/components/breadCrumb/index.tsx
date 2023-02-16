import React from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "antd";

const Breadcrumbs: React.FC = (props: any) => {
	const { breadcrumb } = props;

	return (
		<Breadcrumb>
			{breadcrumb.map((item: any) => {
				return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
			})}
		</Breadcrumb>
	);
};

const mapStateToProps = (state: any) => {
	return state.header;
};

export default connect(mapStateToProps, {})(Breadcrumbs);
