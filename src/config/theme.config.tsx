import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

//TODO estamos agregando tipos al tipo themeprop usado en ThemeConfig
type ThemeProp = {
    children: JSX.Element
}
export enum themePalette {
    BG = '#12181b',
    LIME = '#C8FA5F',
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    //Alert styles
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
    SUCCESS_MIAN = "#66bb6a",
    BG_SUCESS_MAIN = "rgba(102,187,106,0.1)"
}

//TODO definicion de estilos en general de materialUI
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  //TODO lo usamos para customizar y modificar las caracteristicaz principales de cada componente
  components: {
    //TODO aca estamos modificando las caracteristicaz del componente de miButton para modificar todo los botones
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.5em',
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.8em',
          fontSize: '1em',
        },
      },
      //TODO:estamos sobrescriendo los estilos y accediendo al standarError que es el estilo de cuando hay un error
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.SUCCESS_MIAN}`,
          background: themePalette.BG_SUCESS_MAIN,
        },
      },
    },
  },
});

//TODO: FC significa funcion component, significa que devuelve un componente, llaamdnoa  este tipo se pueden usar otras props
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}