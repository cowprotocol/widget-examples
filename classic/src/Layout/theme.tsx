import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const DARK_BLUE = "#052B65"; // #071730
declare module "@mui/material/styles" {
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const appTheme = createTheme({
  palette: {
    // See https://mui.com/material-ui/customization/palette/
    primary: {
      main: DARK_BLUE,
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: green[500],
    },
  },
  status: {
    danger: orange[500],
  },
});
