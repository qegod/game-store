import cls from './Navbar.module.scss'
import {classNames} from "../../../../shared/lib/ClassNames/classNames.ts";
import { Button } from "../../../../shared/ui/Button/Button.tsx";
import {ThemeButton} from "../../../../shared/ui/Button/ThemeButton.ts";

export const Navbar = () => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.items}>
                <Button className={ThemeButton.Clear}>
                    Run
                </Button>
                <Button>Hello</Button>
            </div>
        </div>
    );
};

