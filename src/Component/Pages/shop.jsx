import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal } from "@mui/material";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import Upsert from "./Popups/userUpsert";
import ShopUpsert from "./Popups/shopUpsert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import { BASEURL } from "../../Constants/url";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(TerminalId, shopName) {
  return { TerminalId, shopName };
}
const rows = [
  createData(1, "tmt", "Actions"),
  createData(2, "tm1", "Actions"),
  createData(3, "tm1", "Actions"),
  createData(4, "tm1", "Actions"),
  createData(5, "tm1", "Actions"),
  createData(6, "tm1", "Actions"),
];
export default function Shops() {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const alert = useAlert();
  const [shops, setShops] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        console.log(response);
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
  const deleteShop = (shopname) => {
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
      .delete(BASEURL + "shop/" + shopname)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert.success("Deleted Successfully ");
          handleAllShops();
        } else {
          alert.show("Some Error Occured");
        }
      })
      .catch((err) => {
        alert.show("Some Error Occured");
      });
  };
  useEffect(() => {
    if (localStorage.getItem("AdminToken") == null) {
      history("/login");
    }
    handleAllShops();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Button
        variant='contained'
        color='secondary'
        sx={{
          float: "right",
          m: 2,
        }}
        onClick={handleOpen}
      >
        Add new shop
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <ShopUpsert />
      </Modal>

      <Table sx={{ width: "90%", mx: 2 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>TerminalId</StyledTableCell>
            <StyledTableCell align='left'>Shop Name</StyledTableCell>
            <StyledTableCell align='left'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shops.map((row) => (
            <StyledTableRow key={row.TerminalId}>
              <StyledTableCell component='th' scope='row'>
                {row.TerminalId}
              </StyledTableCell>
              <StyledTableCell align='left'>{row.shopname}</StyledTableCell>
              <StyledTableCell align='left'>
                <Button variant='text' color='secondary'>
                  Edit
                </Button>
                <Button
                  variant='text'
                  color='red'
                  onClick={(e) => {
                    deleteShop(row.shopname);
                  }}
                >
                  Delete
                </Button>
                {/* <Button variant='text' color='colorDanger'>
                  Lock
                </Button> */}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
