import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      <Toaster position="bottom-left" reverseOrder={false} />
    </ThemeProvider>
  );
}

export default App;
