import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    pigmentgreen?: Palette['primary'];
  }
  interface PaletteOptions {
    pigmentgreen?: PaletteOptions['primary'];
    isabeline?: PaletteOptions['primary'];
    teaGreen?: PaletteOptions['primary']; 
    darkspringgreen?: PaletteOptions['primary'];
    battleshipgrey?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#2CA158" },
    secondary: { main: "#2CA158" },
    background: { default: "#222", paper: "#333" },
    pigmentgreen: { main: "#1F6F83" }, // Added pigment green
    isabeline: { main: "#2CA158" }, // Added isabeline
    teaGreen: { main: "#DCEEAD" }, // Added tea green
    darkspringgreen: { main: "#7B7979" }, // Added dark spring green
    battleshipgrey: { main: "#040E10" },
  },
  typography: {
    fontFamily: "Georgia",
  },
});

export default theme;
