import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../Style/main.css";
import { borderRadius } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useAlert } from "react-alert";

import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  tableRowClasses,
  TextField,
} from "@mui/material";
import axios from "axios";
import { BASEURL } from "../../../Constants/url";

const style = {
  position: "absolute",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,

  borderRadius: "10px",
};

export default function CashierUpsert(props) {
  const alert = useAlert();

  const [shops, setShops] = React.useState([]);
  const [shop, setShop] = React.useState([]);
  const [username, setUsername] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState([]);
  const [tel, setTel] = React.useState();
  const [password, setPassword] = React.useState([]);
  const [confirm, setConfirm] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);

  const handleChangeShop = (event) => {
    setShop(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event) => {
    setConfirm(event.target.value);
  };

  const handleChangeTel = (event) => {
    setTel(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAllShops = () => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("AdminToken")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .get(BASEURL + "shop/")
      .then((response) => {
        if (response.data.get.data) {
          var shops = response.data.get.data;
          setShops(shops);
        } else {
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        alert.show("Some Error ");
      });
  };
  const handleRegisterAgent = () => {
    const param = {
      username: username,
      password: password,
      phone: tel,
      shopname: props.shopID,
      role: "cashier",
    };
    console.log(param);
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("AdminToken")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "cashier/register/", param)
      .then((response) => {
        if (response.data.status) {
          alert.success("Registered Successfully ");
        } else {
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        alert.show("Some Error ");
      });
  };
  React.useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
    }
    handleAllShops();
  }, []);
  return (
    <div>
      <Box sx={style} component='form' alignItems='center'>
        <div>
          <TextField
            required
            id='name'
            label='Name'
            type='search'
            value={name}
            onChange={(e) => handleChangeName(e)}
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            required
            id='username'
            label='Username'
            type='search'
            value={username}
            onChange={(e) => handleChangeUsername(e)}
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='email'
            label='E-mail'
            type='email'
            InputLabelProps={{
              shrink: true,
            }}
            value={email}
            sx={{ m: 1, width: 200 }}
            onChange={(e) => handleChangeEmail(e)}
          />
          <TextField
            id='tel'
            label='Tel'
            type='number'
            value={tel}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChangeTel(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            required
            id='password'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => handleChangePassword(e)}
            autoComplete='current-password'
            sx={{ m: 1, width: 200 }}
          />

          {/* <Select
            required
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={shop}
            label='Shop'
            sx={{ m: 1, width: 200 }}
            onChange={(e) => handleChangeShop(e)}
          >
            {shops.map((shop, key) => (
              <MenuItem value={shop.shopname}>{shop.shopname}</MenuItem>
            ))}
          </Select> */}
          <Button
            variant='contained'
            color='secondary'
            sx={{ m: 1, width: 400 }}
            onClick={handleRegisterAgent}
            // disabled={!confirmed}
          >
            Add Cashier
          </Button>
        </div>
      </Box>
    </div>
  );
}
