import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "../../Style/main.css";
import { Box, Button, ButtonGroup } from "@mui/material";
import Cashiers from "./cashiers";
import { useNavigate } from "react-router-dom";

const Cashier = (props) => {
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
          <Button>Terminal</Button>
          <Button>Displays</Button>
          <Button color='black'>Staff</Button>
          <Button>Locations</Button>
        </ButtonGroup>
        <Cashiers shopID={props.shopID} />
      </Box>
    </div>
  );
};
export default Cashier;
