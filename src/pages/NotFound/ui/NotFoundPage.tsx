import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from './NotFoundPage.module.scss'
import {Link} from "react-router";
import {RoutePaths} from "@/shared/config/RouteConfig/RouteConfig.tsx";

const NotFoundPage = () => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            <div className={cls.title}>
                <h1>Страница не найдена</h1>
            </div>
            <div className={cls.buttons}>
                <Link to={RoutePaths.main}>Назад</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;