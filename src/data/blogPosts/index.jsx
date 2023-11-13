import React, { lazy } from "react";

const Verceldeploy = lazy(() => import("./Verceldeploy"));
const Webdeployment = lazy(() => import("./Webdeployment"));
const Frontendtools = lazy(() => import("./Frontendtools"));
const Frontendintro = lazy(() => import("./Frontendintro"));
const Backenddeploy = lazy(() => import("./Backenddeploy"));

export const blogPosts = [
    <Verceldeploy />,
    <Webdeployment />,
    <Frontendtools />,
    <Frontendintro />,
    <Backenddeploy />,
];
