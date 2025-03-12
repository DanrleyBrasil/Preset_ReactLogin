import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f4f6f8",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h5: {
      fontWeight: 600,
    },
  },
  spacing: 8, // Define o espaçamento padrão
});

export default theme;
