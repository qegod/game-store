import {MemoryRouter} from "react-router";
import {AppRoute} from "@/app/providers/router/AppRoute.tsx";

interface IProps {
    children?: React.ReactNode;
    path?: string;
}

export const RenderWithRouter  = (props: IProps) => {
    const {
        children,
        path = '/',
    } = props;


   return (
        <MemoryRouter initialEntries={[path]}>
            <AppRoute/>
            {children}
        </MemoryRouter>
    );
};







