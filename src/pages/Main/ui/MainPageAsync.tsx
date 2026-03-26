import {lazy} from "react";


const MainPageAsync = lazy(() => import("./MainPage.tsx"));
export default MainPageAsync;