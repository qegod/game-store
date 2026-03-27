import { Theme, ThemeContext, type ThemeContextProps, type ThemeType} from "../ThemeContext.ts";
import {useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localStorage/localStorage.ts";

interface ThemeProviderProps {
    children?: React.ReactNode;
    initialTheme?: ThemeType;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)  as ThemeType || Theme.Light;

const ThemeProvider = ({children, initialTheme}: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeType>(initialTheme || defaultTheme);


    const defaultThemeValue  = useMemo<ThemeContextProps>( () => ({
        theme,
        setTheme,
    }), [theme, setTheme]);



    return (
        <ThemeContext.Provider value={defaultThemeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;