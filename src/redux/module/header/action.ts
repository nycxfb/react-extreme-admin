export const toggleTags = (pagePaths: boolean) => ({
	type: "UPDATE_PATH",
	pagePaths
});

export const addVisitTag = (tags: any) => ({
	type: "ADD_VISIT_TAG",
	tags
});

export const toggleVisitTag = (path: string) => ({
	type: "TOGGLE_VISIT_TAG",
	path
});

export const deleteVisitTag = (path: string) => ({
	type: "DELETE_VISIT_TAG",
	path
});

export const toggleBreadcrumb = (breadcrumb: string[]) => ({
	type: "TOGGLE_BREADCRUMB",
	breadcrumb
});
