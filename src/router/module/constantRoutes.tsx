import {baseRouter} from '@/router/interface'
import {lazyLoad} from '@/router/util/lazyLoad'
import {Navigate} from "react-router-dom";
import Login from "@/views/login";
import React from "react";


const constantRouter: baseRouter[] = [
    {
        path: "/",
        element: <Navigate to="/login"/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: '/home',
        element: lazyLoad(() => import('@/layout/homeLayout')),
        meta: {
            title: "主页"
        }
    }
]

export default constantRouter
