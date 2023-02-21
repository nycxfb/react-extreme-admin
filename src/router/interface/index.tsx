import React, { LazyExoticComponent } from "react";

export interface metaConfig {
	title?: string;
	name?: string;
	icon?: string;
}

export interface baseRouter {
	path?: any;
	element?: React.ReactNode | LazyExoticComponent<any>;
	component?: React.ReactNode | LazyExoticComponent<any> | any;
	meta?: metaConfig;
	children?: baseRouter[];
	hidden?: boolean;
}
