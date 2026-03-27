import {describe} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {RenderWithRouter} from '@/shared/lib/test/RenderWithRouter/RenderWithRouter'
import {Link} from "react-router";
import {RoutePaths} from "@/shared/config/RouteConfig/RouteConfig.tsx";

describe('router', () => {

    test("Render page", async () => {
        render(
            <RenderWithRouter>
            </RenderWithRouter>
        )

        const page = await screen.findByTestId('main-page')
        expect(page).toBeInTheDocument()

    })

    test("Page routing", async () => {
        const Navigate = () => (
            <div>
                <Link to={RoutePaths.main}>main-link</Link>
                <Link to={RoutePaths.about}>about-link</Link>
            </div>
        )

        render(
            <RenderWithRouter>
                <Navigate/>
            </RenderWithRouter>
        )

        const mainLink = await screen.findByText('main-link')
        const aboutLink = await screen.findByText('about-link')

        expect(await screen.findByTestId('main-page')).toBeInTheDocument()
        fireEvent.click(aboutLink)
        expect(await screen.findByTestId('about-page')).toBeInTheDocument()
        fireEvent.click(mainLink)
        expect(await screen.findByTestId('main-page')).toBeInTheDocument()
    })



})