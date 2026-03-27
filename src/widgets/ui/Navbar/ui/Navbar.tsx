import cls from './Navbar.module.scss'
import {classNames} from "@/shared/lib/ClassNames/classNames.ts";
import { Button } from "@/shared/ui/Button/Button.tsx";
import {useTheme} from "@/app/providers/themeProvider/useTheme.ts";
import {RoutePaths} from "@/shared/config/RouteConfig/RouteConfig.tsx";
import AppLink from "@/shared/ui/AppLink/AppLink.tsx";

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
                    <AppLink to={RoutePaths.main}>
                        Main
                    </AppLink>
                    <AppLink to={RoutePaths.about}>
                        About
                    </AppLink>
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

