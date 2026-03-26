import { MainPage } from "@/pages/Main";
import { AboutPage } from "@/pages/About";
import type {JSX} from "react";

export enum RouteData {
    Main = "main",
    About = "about",
}

const RouteElements = {
    [RouteData.Main]: <MainPage />,
    [RouteData.About]: <AboutPage />,
}

export const RoutePaths: Record<RouteData, string>  = {
    [RouteData.Main]: '/',
    [RouteData.About]: '/about',
}


export const RouteConfig: Record<RouteData, {path: string, element: JSX.Element}> = {
    [RouteData.Main]: {
        path: RoutePaths[RouteData.Main],
        element: RouteElements[RouteData.Main],
    },

    [RouteData.About]: {
        path: RoutePaths[RouteData.About],
        element: RouteElements[RouteData.About]
    }
}









