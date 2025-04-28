import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {


const theme = createTheme({
  palette: {
    primary: { main: "#2CA158" },
    secondary: { main: "#2CA158" },
    background: { default: "#222", paper: "#333" },
   
  },
  typography: {
    fontFamily: "Georgia",
  },
});

export default theme;
