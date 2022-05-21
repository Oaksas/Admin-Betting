import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal, TextField } from "@mui/material";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import { Box } from "@mui/system";

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
            label='Username'
            type='search'
            variant='filled'
            sx={{ m: 1, width: 200 }}
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='filled'
            sx={{ m: 1, width: 200 }}
          />
          <Button
            variant='contained'
            color='secondary'
            sx={{ m: 1, width: 200 }}
          >
            LOG IN
          </Button>
        </div>
      </Box>
    </div>
  );
}
