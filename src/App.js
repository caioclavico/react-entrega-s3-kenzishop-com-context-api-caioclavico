import { CssBaseline } from "@material-ui/core";
import { Toaster } from "react-hot-toast";
import Routes from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}

export default App;
