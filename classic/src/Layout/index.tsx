import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { appTheme } from "./theme";
import { Grid } from "@mui/material";
import { Drawer } from "./Drawer";
import { Copyright } from "./Copywrite";
import { AppBar } from "./AppBar";

export const DRAWER_WIDTH: number = 600;

export default function Layout() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ mt: 4, mb: 4 }}>
            <Grid container>
              <Grid item xs>
                <Paper sx={{ minHeight: "70vh" }}>Classy!</Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
