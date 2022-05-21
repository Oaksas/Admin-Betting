import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../Style/main.css";
export default function NavMain() {
  const history = useNavigate();

  return (
    <ButtonGroup
      variant='contained'
      aria-label='outlined  button group'
      color='secondary'
      fullWidth
    >
      <Button>Home</Button>
      <Button>Agent</Button>
      <Button>Shop</Button>
      <Button>Permission</Button>
      <Button>BetSlip</Button>
      <Button
        onClick={() => {
          history("/report");
        }}
      >
        Report
      </Button>
      <Button>Administration</Button>
    </ButtonGroup>
  );
}