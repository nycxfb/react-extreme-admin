import React from "react";
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import App from '@/app'
import {store, persist} from '@/redux'
import '@/styles/common.less'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('./assets/svg', true, /\.svg$/));
} catch (error) {
    console.log(error)
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
    <Provider store={store}>
        <PersistGate persistor={persist}>
            <App/>
        </PersistGate>
    </Provider>
)


