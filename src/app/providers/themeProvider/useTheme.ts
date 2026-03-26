import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext.ts";

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);


    const toggleTheme = () => {
        if (setTheme) {
            const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    }


    return {
        theme,
        toggleTheme,
    }

}
