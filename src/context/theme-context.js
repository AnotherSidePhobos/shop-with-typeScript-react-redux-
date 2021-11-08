import { createContext } from "react"


export const themes = {
    light: {
        background: 'lightgrey'
    },
    dark: {
        background: '#727a78'
    }
}

export const ThemeContext = createContext(themes.light)