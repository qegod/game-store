import {createContext} from "react";

export const Theme = {
    Dark: 'dark',
    Light: 'light',
}

export type ThemeType = typeof Theme[keyof typeof Theme];

export interface ThemeContextProps {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})