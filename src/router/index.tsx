import React from "react";
import {Navigate, useRoutes} from "react-router-dom"
import {baseRouterConfig} from "@/router/interface";
import HomeLayout from '@/layout/homeLayout/index'
import Login from '@/views/login/index'
import Demo from "@/views/demo/index";

export const constantRouter: baseRouterConfig[] = [
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
        element: <HomeLayout/>,
        children: [
            {
                path: '/home/index',
                element: <Demo/>
            }
        ]
    }
]


export default () => {
    return useRoutes(constantRouter)
}


