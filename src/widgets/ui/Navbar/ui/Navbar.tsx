import cls from './Navbar.module.scss'
import {classNames} from "@/shared/lib/ClassNames/classNames.ts";
import { Button } from "@/shared/ui/Button/Button.tsx";
import {useTheme} from "@/app/providers/themeProvider/useTheme.ts";
import {Link} from "react-router";
import {RoutePaths} from "@/shared/config/RouteConfig/RouteConfig.tsx";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(cls.Navbar, {}, [className || ''])}>

            <div className={cls.items}>
                <div className={cls.left}>
                </div>
                <div className={cls.middle}>
                    <Link to={RoutePaths.main}>Main</Link>
                    <Link to={RoutePaths.about}>About</Link>
                </div>
                <div className={cls.right}>
                    <Button onClick={toggleTheme}>
                        Изменить тему
                    </Button>
                </div>
            </div>


        </div>
    );
};

