import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const DARK_BLUE = "#052B65";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const appTheme = createTheme({
  palette: {
    primary: {
      main: DARK_BLUE,
    },
    secondary: {
      main: green[500],
    },
  },
  status: {
    danger: orange[500],
  },
});
