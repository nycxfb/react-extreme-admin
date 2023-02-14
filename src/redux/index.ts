import { legacy_createStore as createStore, combineReducers, Store, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import menu from "./module/menu/reducer";
import header from "@/redux/module/header/reducer";
import user from "@/redux/module/user/reducer";

const reducer = combineReducers({ menu, header, user });
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

const persistConfig = {
	key: "redux-state",
	storage: storage
};

// const persistReducerConfig = persistReducer(persistConfig, reducer)

const store: Store = createStore(reducer, middleWares);

const persist = persistStore(store);

export { store, persist };
