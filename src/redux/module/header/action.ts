export const toggleTags = (pagePaths: boolean) => ({
  type: 'UPDATE_PATH',
  pagePaths,
});

export const addVisitTag = (tags: any) => ({
  type: 'ADD_VISIT_TAG',
  tags,
});

export const toggleVisitTag = (path: string) => ({
  type: 'TOGGLE_VISIT_TAG',
  path,
});

export const deleteVisitTag = (path: string) => ({
  type: 'DELETE_VISIT_TAG',
  path,
});

export const deleteOtherVisitTag = (tags: any) => ({
  type: 'DELETE_OTHER_VISIT_TAG',
  tags,
});

export const deleteAllTags = () => ({
  type: 'DELETE_ALL_TAGS',
});
export const toggleBreadcrumb = (breadcrumb: string[]) => ({
  type: 'TOGGLE_BREADCRUMB',
  breadcrumb,
});

export const toggleDrawer = (drawerVisible: boolean) => ({
  type: 'TOGGLE_DRAWER',
  drawerVisible,
});
