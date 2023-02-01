import React, {LazyExoticComponent} from "react";

export interface metaConfig {
    title?: string,
    name?: string
}

export interface baseRouter {
    path?: string,
    element?: React.ReactNode | LazyExoticComponent<any>,
    meta?: metaConfig,
    children?: baseRouter[]
}
