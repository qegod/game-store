import {classNames} from "../../lib/ClassNames/classNames.ts";
import cls from './Button.module.scss'
import type {ButtonHTMLAttributes} from "react";
import type {ThemeButton} from "@/shared/ui/Button/ThemeButton.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    theme?: ThemeButton;
}



export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;


    return (
        <button
            className={classNames(cls.Button, {}, [cls[className || ''], cls[theme || ''] ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

