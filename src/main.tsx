import React from "react";
import ReactDOM from 'react-dom/client'
import App from '@/app'
import '@/styles/common.less'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('./assets/svg', true, /\.svg$/));
} catch (error) {
    console.log(error)
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
    <App/>
)


