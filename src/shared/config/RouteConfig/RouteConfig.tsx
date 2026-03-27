import { MainPage } from "@/pages/Main";
import { AboutPage } from "@/pages/About";
import type {JSX} from "react";
import { NotFoundPage } from "@/pages/NotFound";

export enum RouteData {
    Main = "main",
    About = "about",

    NotFound = "not-found",
}

const RouteElements = {
    [RouteData.Main]: <MainPage />,
    [RouteData.About]: <AboutPage />,
    [RouteData.NotFound]: <NotFoundPage />,
}

export const RoutePaths: Record<RouteData, string>  = {
    [RouteData.Main]: '/',
    [RouteData.About]: '/about',
    [RouteData.NotFound]: '*',
}

export const RouteConfig: Record<RouteData, {path: string, element: JSX.Element}> = {
    [RouteData.Main]: {
        path: RoutePaths[RouteData.Main],
        element: RouteElements[RouteData.Main],
    },

    [RouteData.About]: {
        path: RoutePaths[RouteData.About],
        element: RouteElements[RouteData.About]
    },

    [RouteData.NotFound]: {
        path: RoutePaths[RouteData.NotFound],
        element: RouteElements[RouteData.NotFound]
    }
}

export type RoutePathsT = (typeof RoutePaths)[RouteData];







