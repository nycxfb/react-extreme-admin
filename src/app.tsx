import React from "react";
import {HashRouter} from 'react-router-dom'
import Router from '@/router/index'
import AuthRoute from '@/router/auth/index'

const App = () => {
    return (
        <HashRouter>
            <AuthRoute>
                <Router/>
            </AuthRoute>
        </HashRouter>
    )
}

export default App
