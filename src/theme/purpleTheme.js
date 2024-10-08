import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// hay un tema por defecto, y nosotros lo sobreescribimos
export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254' // violeta
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})