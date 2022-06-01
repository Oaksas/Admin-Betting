import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "../../Style/main.css";
import { Box, Button, ButtonGroup } from "@mui/material";
import Terminals from "./terminals";
import { useNavigate } from "react-router-dom";

const Terminal = () => {
  const history = useNavigate();
  if (!localStorage.getItem("AdminToken")) {
    history("/login");
  }

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
        {" "}
        <Typography
          variant='h6'
          className='alignLeft'
          color='secondary'
          sx={{
            mb: 1,
          }}
        >
          Shop [001]: Terminal
        </Typography>
        <ButtonGroup
          variant='outlined'
          aria-label='outlined  button group'
          color='secondary'
          sx={{
            mb: 1,
          }}
        >
          <Button
            onClick={() => {
              history("/shopDetail");
            }}
          >
            Details
          </Button>
          <Button>Commissions</Button>
          <Button>Product Comm.</Button>
          <Button>Limits</Button>
          <Button>Permissions</Button>
          <Button>Products</Button>
          <Button color='black'>Terminal</Button>
          <Button>Displays</Button>
          <Button
            onClick={() => {
              history("/cashier");
            }}
          >
            Staff
          </Button>
          <Button>Locations</Button>
        </ButtonGroup>
        <Terminals />
      </Box>
    </div>
  );
};
export default Terminal;
