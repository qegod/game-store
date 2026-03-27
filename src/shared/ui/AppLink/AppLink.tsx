import cls from "./AppLink.module.scss"
import {classNames} from "@/shared/lib/ClassNames/classNames.ts";
import {type RoutePathsT} from "@/shared/config/RouteConfig/RouteConfig.tsx";
import {Link} from "react-router";

interface AppLinkProps {
    className?: string;
    children?: React.ReactNode;
    to: RoutePathsT;
}

const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        to
    } = props;

    return (
        <Link to={to}  className={classNames(cls.AppLink, {}, [className || ''])}>
            {children}
        </Link>
    );
};

export default AppLink;