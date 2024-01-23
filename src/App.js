import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./mainTheme";
import Main from "./Components/Main/Main";
function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
