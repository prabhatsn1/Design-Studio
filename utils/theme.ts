import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2CA158" },
    secondary: { main: "#2CA158" },
    background: { default: "#222", paper: "#333" },
  },
  typography: {
    fontFamily: "Georgia",
  },
  shape: {
    borderRadius: 12, // Rounded corners for brand feel
  },
});

export default theme;
