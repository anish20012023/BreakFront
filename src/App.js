import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./mainTheme";
import Main from "./Components/Main/Main";
function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
