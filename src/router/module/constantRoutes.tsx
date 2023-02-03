import {baseRouter} from '@/router/interface'
import {lazyLoad} from '@/router/util/lazyLoad'
import {Navigate} from "react-router-dom";
import Login from "@/views/login";
import React from "react";
import HomeLayout from '@/layout/homeLayout'

const constantRouter: baseRouter[] = [
    {
        path: "/",
        element: <Navigate to="/login"/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]

export default constantRouter
