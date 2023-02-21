export const toggleLanguage = (language: string) => ({
	type: "TOGGLE_LANGUAGE",
	language
});

export const toggleTagPart = (status: boolean) => ({
	type: "TOGGLE_TAG_PART",
	status
});

export const toggleBreadcrumbPart = (status: boolean) => ({
	type: "TOGGLE_BREADCRUMB_PART",
	status
});

export const toggleFooterPart = (status: boolean) => ({
	type: "TOGGLE_FOOTER_PART",
	status
});

export const toggleLogoPart = (status: boolean) => ({
	type: "TOGGLE_LOGO_PART",
	status
});
