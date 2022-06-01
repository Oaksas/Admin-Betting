import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "../../../Style/main.css";

import { useAlert } from "react-alert";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASEURL } from "../../../Constants/url";
import { Button, MenuItem, Select, InputLabel } from "@mui/material";
const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function ShopUpdate() {
  const alert = useAlert();

  const [userID, setUserID] = useState("");
  const [shopName, setShopName] = useState();
  const [shopAddress, setShopAddress] = useState();
  const [shopTelephone, setShopTelephone] = useState();
  const [email, setEmail] = useState();
  const [licenseNo, setLicenseNo] = useState();
  const [users, setUsers] = useState([]);

  const handleIDChange = (event) => {
    setUserID(event.target.value);
  };
  const handleNameChange = (event) => {
    setShopName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setShopAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLicenseNoChange = (event) => {
    setLicenseNo(event.target.value);
  };
  const handleTelChange = (event) => {
    setShopTelephone(event.target.value);
  };
  const handleAllUsers = () => {
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
      .get(BASEURL + "account")
      .then((response) => {
        if (response.data.get.data) {
          console.log(response.data.get.data);
          var users = response.data.get.data;
          setUsers(users);
        } else {
          alert.show("Error Fetching users ");
        }
      })
      .catch((err) => {
        alert.show("Error try again ");
      });
  };

  const handleEditShop = () => {
    const param = {
      UserId: userID,
      shopname: shopName,
    };
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
      .put(BASEURL + "shop/", param)
      .then((response) => {
        console.log(response);
        if (response.data.put.data) {
          alert.success("Shop Updated ");
        } else {
          alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        alert.show("Error ....Try again ");
      });
  };
  useEffect(() => {
    handleAllUsers();
  }, []);

  return (
    <div>
      <Box
        sx={style}
        component='form'
        alignItems='center'
        justifyContent='center'
      >
        <div>
          <Select
            sx={{ m: 1, width: 200 }}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={userID}
            label='Users'
            color='primary'
            onChange={(e) => handleIDChange(e)}
          >
            {users.map((user, key) => (
              <MenuItem value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>

          <TextField
            id='name'
            label='Shop Name'
            type='search'
            value={shopName}
            onChange={(e) => handleNameChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            id='address'
            label='Shop Address'
            type='search'
            value={shopAddress}
            onChange={(e) => handleAddressChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            id='tel'
            label='Tel'
            type='tel'
            value={shopTelephone}
            onChange={(e) => handleTelChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <TextField
            id='email'
            label='Shop Email'
            type='email'
            value={email}
            onChange={(e) => handleEmailChange(e)}
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='license'
            label='Shop License'
            type='search'
            value={licenseNo}
            onChange={(e) => handleLicenseNoChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <Button
            variant='contained'
            color='secondary'
            onClick={handleEditShop}
            sx={{ m: 1, width: 200 }}
          >
            Add Shop
          </Button>
        </div>
      </Box>
    </div>
  );
}
