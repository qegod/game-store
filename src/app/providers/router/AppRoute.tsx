import {Suspense} from "react";
import {Route, Routes} from "react-router";
import {RouteConfig} from "@/shared/config/RouteConfig/RouteConfig.tsx";



export const AppRoute = () => {
    return (
            <Routes>
                {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                {Object.entries(RouteConfig).map(([_, data]) => {
                    return <Route
                        path={data.path}
                        key={data.path}
                        element={
                            <Suspense fallback={<div>...загрузка</div>}>
                                {data.element}
                            </Suspense>
                        }
                    />
                })}
            </Routes>
    );
};

