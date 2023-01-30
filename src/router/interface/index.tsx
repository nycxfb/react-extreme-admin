import React from "react";

export interface metaConfig {
    title?: string,
    name?: string
}

export interface baseRouterConfig {
    path?: string,
    element?: React.ReactNode,
    meta?: metaConfig,
    children?: baseRouterConfig[]
}
