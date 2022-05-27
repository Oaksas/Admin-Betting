import React, { useState } from "react";
import { useAlert } from "react-alert";
import Coin from "react-cssfx-loading/lib/CircularProgress";
import { useNavigate } from "react-router-dom";

import { Button, TextField } from "@mui/material";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import { Box } from "@mui/system";
import { BASEURL } from "../../Constants/url";
import axios from "axios";
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
export default function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [processing, setProcessing] = useState(false);
  const alert = useAlert();
  const [isActive, setIsActive] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    setProcessing(true);
    setIsActive(true);
    e.preventDefault();
    if (username === "" || password === "") {
      alert.show("Empty Credential ");
      setProcessing(false);
      setIsActive(false);
      return;
    } else {
      var credential = {
        username: username,
        password: password,
      };
      if (localStorage.getItem("tokenAdmin")) {
        setProcessing(false);
        setIsActive(false);

        history("/");
      }
      axios
        .post(BASEURL + "auth/account/login", credential)
        .then((response) => {
          if (response.data.status === "success") {
            localStorage.setItem("tokenAdmin", response.data.post.data.token);
            // localStorage.setItem("user", response.data.data.username);

            setProcessing(false);
            setIsActive(false);
            alert.success("Correct Credential ");
            history("/");
          } else {
            setProcessing(false);
            setIsActive(false);
            alert.show("Incorrect Credential ");
          }
        })
        .catch((err) => {
          setProcessing(false);
          setIsActive(false);
          console.log(err);
        });
    }
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
            id='username'
            name='username'
            label='Username'
            type='search'
            variant='filled'
            onChange={(e) => handleOnChange(e)}
            sx={{ m: 1, width: 200 }}
            required
          />
          <TextField
            id='password'
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='filled'
            onChange={(e) => handleOnChange(e)}
            sx={{ m: 1, width: 200 }}
            required
          />

          <Button
            variant='contained'
            color='secondary'
            sx={{ m: 1, width: 200 }}
            onClick={(e) => handleSubmit(e)}
            disabled={isActive}
          >
            {processing === true ? (
              <Coin
                color='#0066ff'
                width='30px'
                height='30px'
                duration='2s'
                marginWidth={"100"}
              />
            ) : (
              "LOG IN"
            )}
          </Button>
        </div>
      </Box>
    </div>
  );
}
