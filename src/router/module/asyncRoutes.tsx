import {baseRouter} from '@/router/interface'
import {lazyLoad} from '@/router/util/lazyLoad'

const asyncRoutes: baseRouter[] = [
    {
        path: "/systemManagement",
        element:lazyLoad(()=>import('@/layout/homeLayout')),
        meta: {
            title: "系统管理"
        },
        children: [
            {
                path: "/systemManagement/user",
                element: lazyLoad(() => import('@/views/systemManagement/user')),
                meta: {
                    title: "用户列表"
                }
            },
            {
                path: "/systemManagement/role",
                element: lazyLoad(() => import('@/views/systemManagement/role')),
                meta: {
                    title: "角色列表"
                }
            }
        ]
    }
]

export default asyncRoutes
