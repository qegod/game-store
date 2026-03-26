import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeContextProps, type ThemeType} from "../ThemeContext.ts";
import {useMemo, useState} from "react";

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