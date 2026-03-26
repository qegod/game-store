import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './app/style/index.scss'
import ThemeProvider from "./app/providers/themeProvider/ThemeProvider.tsx";
import {BrowserRouter} from "react-router";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)
