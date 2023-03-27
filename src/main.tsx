import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StyleProvider, legacyLogicalPropertiesTransformer } from "@ant-design/cssinjs";
import App from "@/app";
import { store } from "@/redux";
import "@/styles/common.less";
import "@/i18n/config";
import "@/styles/transition.less";

import microApp from "@micro-zoe/micro-app";

microApp.start();

// 引入全部svg供全局使用
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
	requireContext.keys().forEach(requireContext);

try {
	importAll(require.context("./assets/svg", true, /\.svg$/));
} catch (error) {
	console.log(error);
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
	<Provider store={store}>
		<StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
			<App />
		</StyleProvider>
	</Provider>
);
