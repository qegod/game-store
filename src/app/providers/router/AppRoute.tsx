import {Suspense} from "react";
import {Route, Routes} from "react-router";
import {RouteConfig} from "@/shared/config/RouteConfig/RouteConfig.tsx";



export const AppRoute = () => {
    return (
        <Suspense fallback={<div>...загрузка</div>}>
            <Routes>
                {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                {Object.entries(RouteConfig).map(([_, data]) => {
                    return <Route path={data.path} key={data.path} element={data.element}/>
                })}
            </Routes>
        </Suspense>
    );
};

