import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../Style/main.css";
import { borderRadius } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import {
  FormControl,
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

export default function Upsert() {
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
            id='name'
            label='Name'
            type='search'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='email'
            label='E-mail'
            type='search'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='tel'
            label='Tel'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='username'
            label='Username'
            type='search'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='confirmpassword'
            label='Confirm Password'
            type='password'
            autoComplete='current-password'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='outlined-select-currency'
            select
            label='Role'
            value={role}
            onChange={handleChange}
            sx={{ m: 1, width: 200 }}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id='outlined-select-currency'
            select
            label='Shop'
            value={shop}
            onChange={handleChangeShop}
            sx={{ m: 1, width: 200 }}
          >
            {shopList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
