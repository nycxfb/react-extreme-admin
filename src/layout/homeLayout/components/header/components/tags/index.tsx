import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Tag } from "antd";
import { deleteVisitTag } from "@/redux/module/header/action";
import { store } from "@/redux/index";
import "./index.less";

const Tags = (props: any) => {
	const { tags, deleteVisitTag } = props;
	const navigate = useNavigate();
	const handleClose = (removedTag: any) => {
		deleteVisitTag(removedTag.path);
		const currentTag = store.getState().header.tags;
		navigate(currentTag[currentTag.length - 1].path);
	};

	const toTargetPage = (tagItem: any) => {
		navigate(tagItem.path);
	};

	return (
		<>
			{tags.map((tagItem: any) => {
				return (
					<Tag
						closable
						color={tagItem.active ? "rgba(132,65,216,0.74)" : ""}
						key={tagItem.path}
						onClick={() => {
							toTargetPage(tagItem);
						}}
						onClose={e => {
							e.preventDefault();
							handleClose(tagItem);
						}}
					>
						{tagItem.title}
					</Tag>
				);
			})}
		</>
	);
};
const mapStateToProps = (state: any) => {
	return state.header;
};

const mapDispatchToProps = {
	deleteVisitTag
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
