import './style/index.scss'
import './style/reset.scss'
import {useTheme} from "./providers/themeProvider/useTheme.ts";
import {classNames} from "../shared/lib/ClassNames/classNames.ts";
import { Navbar } from "../widgets/ui/Navbar/ui/Navbar.tsx";
import { Button } from "../shared/ui/Button/Button.tsx";
import {ThemeButton} from "../shared/ui/Button/ThemeButton.ts";

const App = () => {
    const { theme, toggleTheme } = useTheme()



    return (
        <div className={classNames('app', {}, [theme || ''])}>
            <Navbar></Navbar>
            Hello world
            <Button onClick={toggleTheme} className={ThemeButton.Clear}>theme Change</Button>
        </div>
    );
};

export default App;