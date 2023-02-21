import produce from "immer";
import { AnyAction } from "redux";

interface systemState {
	isShowTag: boolean;
	isShowBreadcrumb: boolean;
	isShowFooter: boolean;
	isShowLogo: boolean;
}

const systemState: systemState = {
	isShowTag: true,
	isShowBreadcrumb: true,
	isShowFooter: true,
	isShowLogo: true
};

const system = (state: systemState = systemState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case "TOGGLE_TAG_PART":
				draftState.isShowTag = action.status;
				break;

			case "TOGGLE_BREADCRUMB_PART":
				draftState.isShowBreadcrumb = action.status;
				break;

			case "TOGGLE_FOOTER_PART":
				draftState.isShowFooter = action.status;
				break;

			case "TOGGLE_LOGO_PART":
				draftState.isShowLogo = action.status;
				break;
		}
	});

export default system;
