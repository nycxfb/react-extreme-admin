/**
 * @author nycxfb
 * @date 2023-02-15 21:51:10
 * @description:生成路径数组，用于路由权限判断
 */
const generateRoutePath = (routes: any, newArr: string[] = []) => {
  routes.forEach((routeItem: any) => {
    if (routeItem.children) {
      newArr.push(routeItem.path);
      generateRoutePath(routeItem.children, newArr);
    } else {
      newArr.push(routeItem.path);
    }
  });

  return newArr;
};

/**
 * @author nycxfb
 * @description:生成面包屑
 */
const generateBreadcrumb = (routes: any, path: string, fullPathArray: string[] = [], breadcrumbArr: string[] = []) => {
  const singlePathArray = path.split('/');
  singlePathArray.shift();

  // 获得层级路径数组
  for (let i = 0; i <= singlePathArray.length; i++) {
    const sliceArray = singlePathArray.slice(0, i);
    fullPathArray.push(`/${sliceArray.join('/')}`);
  }

  // 获取页面标题
  fullPathArray.forEach((item) => {
    routes.forEach((routeItem: any) => {
      if (item == routeItem.path) {
        breadcrumbArr.push(routeItem.meta.title);
      }
    });
  });
  breadcrumbArr.unshift('homepage');
  return breadcrumbArr;
};

/**
 * @author nycxfb
 * @description:拍平路由数组
 */
const flattenRouter = (routes: any, flattenRoutes: any = []) => {
  routes.forEach((routeItem: any) => {
    if (routeItem.children) {
      flattenRoutes = flattenRoutes.concat(flattenRouter(routeItem.children));
      flattenRoutes.push(routeItem);
    } else {
      flattenRoutes.push(routeItem);
    }
  });
  return flattenRoutes;
};

/**
 * @author nycxfb
 * @date 2023-02-15 21:52:35
 * @description:生成页面tag名称
 */
const generateTagName = (routes: any, path: string, tag: {} = {}) => {
  for (let routeItem of routes) {
    if (routeItem.path === path) {
      tag = {
        path: routeItem.path,
        title: routeItem.meta.title,
        active: false
      };
      break;
    }
  }
  return tag;
};

/**
 * @author nycxfb
 * @date 2023-02-27 14:38:43
 * @description:生成父级菜单路径数组
 */
const generateSubmenuPath = (routes: any, submenuArr: any = []) => {
  routes.forEach((routeItem: any) => {
    if (routeItem.children && routeItem.children.length > 1) {
      submenuArr.push(routeItem.path);
    }
  });

  return submenuArr;
};

export { generateRoutePath, generateBreadcrumb, generateTagName, generateSubmenuPath, flattenRouter };
