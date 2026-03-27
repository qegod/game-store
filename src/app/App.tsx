import './style/index.scss'
import './style/reset.scss'
import {useTheme} from "./providers/themeProvider/useTheme.ts";
import {classNames} from "../shared/lib/ClassNames/classNames.ts";
import { Navbar } from "../widgets/ui/Navbar/ui/Navbar.tsx";
import {AppRoute} from "@/app/providers/router/AppRoute.tsx";

const App = () => {
    const { theme } = useTheme()



    return (
        <div className={classNames('app', {}, [theme || ''])}>
            <Navbar></Navbar>
            <div className="page-content">
                <AppRoute/>
            </div>
        </div>
    );
};

export default App;