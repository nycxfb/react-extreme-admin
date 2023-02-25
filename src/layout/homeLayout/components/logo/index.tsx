import React from "react";
import { connect } from "react-redux";
import SvgIcon from "@/components/svgIcon";

const Logo = (props: any) => {
	const { isCollapse } = props;
	return (
		<div className="side">
			<SvgIcon iconClass="logo" />
			{!isCollapse && <span className="title">ExtremeAdmin</span>}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return state.menu;
};
export default connect(mapStateToProps, {})(Logo);
