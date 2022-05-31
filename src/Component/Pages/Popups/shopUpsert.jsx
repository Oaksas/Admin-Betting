import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../Style/main.css";
import { borderRadius } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useAlert } from "react-alert";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASEURL } from "../../../Constants/url";

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

export default function ShopUpsert() {
  const alert = useAlert();

  const [userID, setUserID] = useState();
  const [shopName, setShopName] = useState();

  const handleIDChange = (event) => {
    setUserID(event.target.value);
  };
  const handleNameChange = (event) => {
    setShopName(event.target.value);
  };
  const handleRegisterShop = () => {
    const param = {
      UserID: userID,
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
      .post(BASEURL + "shop/register/", param)
      .then((response) => {
        if (response.data.post.data) {
          alert.success("Shop Created ");
        } else {
          alert.show("Error ....Try again ");
        }
      })
      .catch((err) => {
        alert.show("Error ....Try again ");
      });
  };
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
            id='userId'
            label='User ID'
            type='search'
            value={userID}
            onChange={(e) => handleIDChange(e)}
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='name'
            label='Shop Name'
            type='search'
            value={shopName}
            onChange={(e) => handleNameChange(e)}
            sx={{ m: 1, width: 200 }}
          />

          <Button
            variant='contained'
            color='secondary'
            onClick={handleRegisterShop}
            sx={{ m: 1, width: 200 }}
          >
            Add Shop
          </Button>
        </div>
      </Box>
    </div>
  );
}
