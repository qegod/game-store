import {classNames} from "../../lib/ClassNames/classNames.ts";
import cls from './Button.module.scss'
import type {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}


export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props;


    return (
        <button
            className={classNames(cls.Button, {}, [cls[className || '']])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

