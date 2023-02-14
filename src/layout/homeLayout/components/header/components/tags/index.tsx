import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { store } from "@/redux";
import { Tag } from "antd";

const Tags = (props: any) => {
	const { tags } = props;
	const [tagsView, setTagsView] = useState([]);

	useEffect(() => {
		// setTagsView(tags);
		// let unsubscribe = store.subscribe(() => {
		//     const {header} = store.getState()
		//     setTags(header.tags)
		//
		// })
		// return () => {
		//     unsubscribe()
		// }
	}, []);

	return (
		<>
			{props.tags.map((tagItem: any) => {
				return (
					<Tag closable key={tagItem}>
						{tagItem}
					</Tag>
				);
			})}
		</>
	);
};
const mapStateToProps = (state: any) => {
	return state.header;
};

export default connect(mapStateToProps, {})(Tags);
