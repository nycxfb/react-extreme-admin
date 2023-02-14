import { produce } from "immer";
import { AnyAction } from "redux";

interface headerState {
	pagePath: string[];
	tags: string[];
}

const headerState: headerState = {
	pagePath: [],
	tags: ["首页"]
};

const header = (state: headerState = headerState, action: AnyAction) =>
	produce(state, draftSate => {
		switch (action.type) {
			case "UPDATE_PATH":
				draftSate.pagePath = action.pagePath;
				break;
			case "UPDATE_TAGS":
				draftSate.tags.push(action.tags);
				break;
		}
	});

export default header;