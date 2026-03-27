import {render, screen} from "@testing-library/react";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {ThemeButton} from "@/shared/ui/Button/ThemeButton.ts";
import cls  from './Button.module.scss'

describe("Button", () => {
    test("In document", () => {
        render(<Button>TEST</Button>);
        const btn = screen.getByText('TEST');

        expect(btn).toBeInTheDocument();
    });

    test("Have styles", () => {
        render(<Button theme={ThemeButton.Clear}>TEST</Button>)
        const btn = screen.getByText('TEST')

        expect(btn).toHaveClass(cls[ThemeButton.Clear]);
    })
});