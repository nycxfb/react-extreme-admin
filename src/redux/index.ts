import { legacy_createStore as createStore, combineReducers, Store, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import menu from "./module/menu/reducer";
import header from "@/redux/module/header/reducer";
import user from "@/redux/module/user/reducer";

const reducer = combineReducers({ menu, header, user });
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

const rootReducer = (state: any, action: any) => {
	if (action.type === "USER_LOGOUT") {
		state = undefined;
	}
	return reducer(state, action);
};

const store: Store = createStore(rootReducer, middleWares);

export { store };
