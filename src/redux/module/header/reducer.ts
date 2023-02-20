import { produce } from "immer";
import { AnyAction } from "redux";

export interface tagItem {
	title: string;
	path: string;
	active: boolean;
}

interface headerState {
	pagePath: string[];
	tags: tagItem[];
	breadcrumb: string[];
	drawerVisible: boolean;
}

const headerState: headerState = {
	pagePath: [],
	tags: [],
	breadcrumb: [],
	drawerVisible: false
};

const header = (state: headerState = headerState, action: AnyAction) =>
	produce(state, draftSate => {
		switch (action.type) {
			case "UPDATE_PATH":
				draftSate.pagePath = action.pagePath;
				break;

			case "ADD_VISIT_TAG":
				if (draftSate.tags.some(t => t.path == action.tags.path)) return;
				draftSate.tags.push(action.tags);
				break;

			case "TOGGLE_VISIT_TAG":
				draftSate.tags.forEach((item: any) => {
					item.path === action.path ? (item.active = true) : (item.active = false);
				});
				break;

			case "DELETE_VISIT_TAG":
				for (let [i, t] of draftSate.tags.entries()) {
					if (t.path === action.path) {
						draftSate.tags.splice(i, 1);
						break;
					}
				}
				break;

			case "DELETE_OTHER_VISIT_TAG":
				draftSate.tags = [action.tags];
				break;

			case "DELETE_ALL_TAGS":
				draftSate.tags.length = 0;
				break;

			case "TOGGLE_BREADCRUMB":
				draftSate.breadcrumb = action.breadcrumb;
				break;

			case "TOGGLE_DRAWER":
				draftSate.drawerVisible = action.drawerVisible;
				break;
		}
	});

export default header;
