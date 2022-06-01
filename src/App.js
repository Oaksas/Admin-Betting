import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navbar from "./Component/Pages/Navigation/navbar";
import { grey, orange, red } from "@mui/material/colors";
import Home from "./Component/Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terminal from "./Component/Pages/terminal";
import Login from "./Component/Pages/login";
import Reports from "./Component/Pages/reports";
import Shops from "./Component/Pages/shop";
import Agents from "./Component/Pages/agent";
import ShopDetail from "./Component/Pages/shopDetail";
import { useState } from "react";
import Cashier from "./Component/Pages/cashier";

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
    black: {
      main: grey[600],
    },
  },
});
function App() {
  const [shopID, setShopID] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/terminal' element={<Terminal />} />
            <Route path='/report' element={<Reports />} />
            <Route
              path='/shops'
              element={<Shops setShopID={(value) => setShopID(value)} />}
            />
            <Route path='/agents' element={<Agents />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cashier' element={<Cashier shopID={shopID} />} />

            <Route
              path='/shopDetail'
              element={<ShopDetail shopID={shopID} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
