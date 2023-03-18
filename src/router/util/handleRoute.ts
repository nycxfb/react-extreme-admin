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
 * @date 2023-02-15 21:51:56
 * @description:生成面包屑
 */
const generateBreadcrumb = (routes: any, path: string, breadcrumbArr: string[] = []) => {
	routes.forEach((routeItem: any) => {
		routeItem?.children.forEach((childrenItem: any) => {
			if (childrenItem.path === path) {
				if (routeItem.children.length > 1) {
					breadcrumbArr.push("homepage", routeItem.meta.title, childrenItem.meta.title);
				} else {
					breadcrumbArr.push("homepage", routeItem.meta.title);
				}
			}
		});
	});
	return breadcrumbArr;
};

/**
 * @author nycxfb
 * @date 2023-02-15 21:52:35
 * @description:生成页面tag名称
 */

const generateTagName = (routes: any, path: string, tag: {} = {}) => {
	routes.forEach((routeItem: any) => {
		routeItem.children.forEach((childrenItem: any) => {
			if (childrenItem.path === path) {
				tag = {
					path: childrenItem.path,
					title: childrenItem.meta.title,
					active: false
				};
			}
		});
	});

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

export { generateRoutePath, generateBreadcrumb, generateTagName, generateSubmenuPath };
