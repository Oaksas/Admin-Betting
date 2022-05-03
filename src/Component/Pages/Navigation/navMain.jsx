import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function NavMain() {
  return (
    <ButtonGroup
      variant='contained'
      aria-label='outlined  button group'
      color='secondary'
      fullWidth
    >
      <Button>Home</Button>
      <Button>Schedule</Button>
      <Button>Betting</Button>
      <Button>CMS</Button>
      <Button>Online</Button>
      <Button>Monitoring</Button>
      <Button>Accounting</Button>
      <Button>Reports</Button>
      <Button>Administration</Button>
    </ButtonGroup>
  );
}
