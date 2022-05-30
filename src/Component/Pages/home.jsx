import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "../../Style/main.css";
import { Box, Button, ButtonGroup } from "@mui/material";
import Users from "./users";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("tokenAdmin")) {
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
        {" "}
        <Typography
          variant='h6'
          className='alignLeft'
          color='secondary'
          sx={{
            mb: 1,
          }}
        >
          Shop [001]: Test
        </Typography>
        <ButtonGroup
          variant='outlined'
          aria-label='outlined  button group'
          color='secondary'
          sx={{
            mb: 1,
          }}
        >
          <Button>Details</Button>
          <Button>Commissions</Button>
          <Button>Product Comm.</Button>
          <Button>Limits</Button>
          <Button>Permissions</Button>
          <Button>Products</Button>
          <Button
            onClick={() => {
              history("/terminal");
            }}
          >
            Terminal
          </Button>
          <Button>Displays</Button>
          <Button>Staff</Button>
          <Button>Locations</Button>
          <Button>Allowed IP Addresses</Button>
        </ButtonGroup>
        <Users />
      </Box>
    </div>
  );
};
export default Home;
