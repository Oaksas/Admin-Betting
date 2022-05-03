import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navbar from "./Component/Pages/Navigation/navbar";
import { grey, orange, red } from "@mui/material/colors";
import Home from "./Component/Pages/home";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: "#3091ff",
    },
    white: {
      main: "#ffffff",
    },
    blue: {
      main: "",
    },
    colorDanger: {
      main: orange[500],
    },
    red: {
      main: red[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
