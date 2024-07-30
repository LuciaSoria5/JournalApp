import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"

export const AppTheme = ({ children }) => {
  // High component, vamos a aplicar el theme a sus componentes hijos
    return (
    <ThemeProvider theme={ purpleTheme } >
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
