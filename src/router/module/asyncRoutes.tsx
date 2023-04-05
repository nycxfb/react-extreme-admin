import React from 'react';
import { baseRouter } from '@/router/interface';
import { lazyLoad } from '@/router/util/lazyLoad';
import HomeLayout from '@/layout/homeLayout';

const asyncRoutes: baseRouter[] = [
  {
    path: '/home',
    element: <HomeLayout />,
    meta: {
      title: 'index'
    },
    children: [
      {
        path: '/home/index',
        element: lazyLoad(() => import('@/views/home')),
        meta: {
          title: 'index',
          icon: 'BankOutlined'
        }
      }
    ]
  },
  {
    path: '/systemManagement',
    element: <HomeLayout />,
    meta: {
      title: 'systemManagement',
      icon: 'SettingOutlined'
    },
    children: [
      {
        path: '/systemManagement/user',
        element: lazyLoad(() => import('@/views/systemManagement/user')),
        meta: {
          title: 'userList',
          icon: 'UsergroupDeleteOutlined'
        }
      },
      {
        path: '/systemManagement/role',
        element: lazyLoad(() => import('@/views/systemManagement/role')),
        meta: {
          title: 'roleList',
          icon: 'UserOutlined'
        }
      }
    ]
  },
  {
    path: '/dynamicComponent',
    element: <HomeLayout />,
    meta: {
      title: 'dynamicComponents',
      icon: 'BlockOutlined'
    },
    children: [
      {
        path: '/dynamicComponent/dynamicForm',
        element: lazyLoad(() => import('@/views/dynamicComponent/dynamicForm')),
        meta: {
          title: 'dynamicForm',
          icon: 'ProjectOutlined'
        }
      },
      {
        path: '/dynamicComponent/dynamicTable',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'dynamicTable',
          icon: 'TableOutlined'
        }
      }
    ]
  },

  {
    path: '/pageScheme',
    element: <HomeLayout />,
    meta: {
      title: 'pageScheme',
      icon: 'ProfileOutlined'
    },
    children: [
      {
        path: '/pageScheme/strongRelationship',
        element: lazyLoad(() => import('@/views/pageScheme/strongRelationship')),
        meta: {
          title: 'strongRelationship',
          icon: 'RiseOutlined'
        }
      },
      {
        path: '/pageScheme/weakRelationship',
        element: lazyLoad(() => import('@/views/pageScheme/weakRelationship')),
        meta: {
          title: 'weakRelationship',
          icon: 'FallOutlined'
        }
      },
      {
        path: '/pageScheme/weakRelationship/detail',
        element: lazyLoad(() => import('@/views/pageScheme/weakRelationship/detail')),
        hidden: true,
        meta: {
          title: 'weakRelationshipDetail'
        }
      }
    ]
  },
  {
    path: '/designPattern',
    element: <HomeLayout />,
    meta: {
      title: 'designPattern',
      icon: 'ClusterOutlined'
    },
    children: [
      {
        path: '/designPattern/publishSubscribePattern',
        element: lazyLoad(() => import('@/views/designPattern/publishSubscribePattern')),
        meta: {
          title: 'publishSubscribePattern',
          icon: 'NotificationOutlined'
        }
      },
      {
        path: '/designPattern/strategyPattern',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'strategyPattern',
          icon: 'PartitionOutlined'
        }
      }
    ]
  },
  {
    path: '/microFront',
    element: <HomeLayout />,
    meta: {
      title: 'microFront',
      icon: 'PicRightOutlined'
    },
    children: [
      {
        path: '/microFront/iframe',
        element: lazyLoad(() => import('@/views/microFront/iframe')),
        meta: {
          title: 'iframe'
        }
      },
      {
        path: '/microFront/qiankun',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'qiankun'
        }
      },
      {
        path: '/microFront/microApp',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'microApp'
        }
      }
    ]
  },
  {
    path: '/frontUtils',
    element: <HomeLayout />,
    meta: {
      title: 'frontUtils',
      icon: 'FunctionOutlined'
    },
    children: [
      {
        path: '/frontUtils/formatCheck',
        element: lazyLoad(() => import('@/views/frontUtils/formatCheck')),
        meta: {
          title: 'formatCheck',
          icon: 'FundOutlined'
        }
      },
      {
        path: '/frontUtils/dataMask',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'dataMask',
          icon: 'FundOutlined'
        }
      }
    ]
  },
  {
    path: '/multiMenu',
    element: <HomeLayout />,
    meta: {
      title: 'multiMenu',
      icon: 'UnorderedListOutlined'
    },
    children: [
      {
        path: '/multiMenu/secondLevel',
        meta: {
          title: 'secondLevel'
        },
        children: [
          {
            path: '/multiMenu/secondLevel/secondLevel1',
            element: lazyLoad(() => import('@/views/multiMenu/secondLevel/page1')),
            meta: {
              title: 'menu 2-1'
            }
          },
          {
            path: '/multiMenu/secondLevel/secondLevel2',
            element: lazyLoad(() => import('@/views/multiMenu/secondLevel/page2')),
            meta: {
              title: 'menu 2-2'
            }
          }
        ]
      },
      {
        path: '/multiMenu/firstLevel',
        element: lazyLoad(() => import('@/views/multiMenu/firstLevel')),
        meta: {
          title: 'menu 1-1'
        }
      }
    ]
  },
  {
    path: '/map',
    element: <HomeLayout />,
    meta: {
      title: 'map'
    },
    children: [
      {
        path: '/map/index',
        element: lazyLoad(() => import('@/views/map')),
        meta: {
          title: 'map',
          icon: 'DribbbleOutlined'
        }
      }
    ]
  },
  {
    path: '/editor',
    element: <HomeLayout />,
    meta: {
      title: 'editor'
    },
    children: [
      {
        path: '/editor/index',
        element: lazyLoad(() => import('@/views/editor')),
        meta: {
          title: 'editor',
          icon: 'FormOutlined'
        }
      }
    ]
  },
  {
    path: '/largeScreenDisplay',
    element: <HomeLayout />,
    meta: {
      title: 'largeScreenDisplay'
    },
    children: [
      {
        path: '/largeScreenDisplay/index',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'largeScreenDisplay',
          icon: 'FundOutlined'
        }
      }
    ]
  },
  {
    path: '/instantMessage',
    element: <HomeLayout />,
    meta: {
      title: 'instantMessage'
    },
    children: [
      {
        path: '/instantMessage/demo1',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'instantMessage',
          icon: 'CommentOutlined'
        }
      }
    ]
  },
  {
    path: '/storageScheme',
    element: <HomeLayout />,
    meta: {
      title: 'storageScheme'
    },
    children: [
      {
        path: '/storageScheme/demo1',
        element: lazyLoad(() => import('@/views/develop')),
        meta: {
          title: 'storageScheme',
          icon: 'CloudServerOutlined'
        }
      }
    ]
  }
];

export default asyncRoutes;
