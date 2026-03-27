import {useContext} from "react";
import { Theme, ThemeContext} from "./ThemeContext.ts";
import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localStorage/localStorage.ts";

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
