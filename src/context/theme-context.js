import { createContext } from "react"


export const themes = {
    light: {
        background: '#dde0e4'
    },
    dark: {
        background: '#515e6e'
    }
}

export const ThemeContext = createContext(themes.light)