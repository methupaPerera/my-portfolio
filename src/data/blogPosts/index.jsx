import React, { lazy } from "react";

const Verceldeploy = lazy(() => import("./Verceldeploy"));
const Webdeployment = lazy(() => import("./Webdeployment"));
const Frontendtools = lazy(() => import("./Frontendtools"));
const Frontendintro = lazy(() => import("./Frontendintro"));

export const blogPosts = [
    <Verceldeploy />,
    <Webdeployment />,
    <Frontendtools />,
    <Frontendintro />,
];
