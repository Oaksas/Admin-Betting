import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "../../Style/main.css";
import { Box, Button, ButtonGroup } from "@mui/material";
import Users from "./users";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
      console.log(localStorage.getItem("AdminToken"));

      history("/login");
    }
  }, []);
  return (
    <div sx={{ m: 3 }}>
      <Box
        fullwidth
        alignItems='center'
        sx={{
          width: "95%",
          height: 300,
          p: 2,
        }}
      >
        <Users />
      </Box>
    </div>
  );
};
export default Home;
