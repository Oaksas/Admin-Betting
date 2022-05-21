import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../Style/main.css";
import { borderRadius } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Checkbox from "@mui/material/Checkbox";

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  tableRowClasses,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const roles = [
  {
    value: "shopManager",
    label: "Shop Manager",
  },
  {
    value: "shopManager",
    label: "Shop Manager",
  },
];
const shopList = [
  {
    value: "shop1",
    label: "Shop 1",
  },
  {
    value: "shop2",
    label: "Shop 2",
  },
];

export default function UpsertTerminal() {
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleChangeShop = (event) => {
    setShop(event.target.value);
  };

  const [role, setRole] = React.useState("ShopManager");
  const [shop, setShop] = React.useState("Shop 1");

  return (
    <div>
      <Box
        sx={style}
        component='form'
        alignItems='center'
        justifyContent='center'
      >
        <div>
          <TextField
            id='description'
            label='Description'
            type='search'
            variant='filled'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='name'
            label='Name'
            type='search'
            variant='filled'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='notes'
            label='Notes'
            type='search'
            variant='filled'
            sx={{ m: 1, width: 200 }}
          />{" "}
          <TextField
            id='secureID'
            label='Secure ID'
            type='search'
            variant='filled'
            sx={{ m: 1, width: 200 }}
          />
          <FormGroup sx={{ m: 1 }}>
            <FormControlLabel
              label='Sale terminal'
              control={<Checkbox defaultChecked color='secondary' />}
            />
            <FormControlLabel
              label='RPR '
              control={<Checkbox defaultChecked color='secondary' />}
            />

            <FormControlLabel
              label='PAY '
              control={<Checkbox defaultChecked color='secondary' />}
            />
            <FormControlLabel
              label='CNL '
              control={<Checkbox defaultChecked color='secondary' />}
            />
            <FormControlLabel
              label='Status '
              control={<Checkbox defaultChecked color='secondary' />}
            />
          </FormGroup>
          <Button
            variant='contained'
            color='secondary'
            sx={{ m: 1, width: 200 }}
          >
            Add User
          </Button>
        </div>
      </Box>
    </div>
  );
}
