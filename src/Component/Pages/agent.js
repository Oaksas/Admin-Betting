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
import ShopUpsert from "./Popups/shopUpsert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { BASEURL } from "../../Constants/url";
import Upsert from "./Popups/userUpsert";
import AgentUpsert from "./Popups/agentUpsert";
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

function createData(TerminalId, username) {
  return { TerminalId, username };
}

export default function Agents() {
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const alert = useAlert();
  const [users, setUsers] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAllusers = () => {
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
          var users = response.data.get.data;
          setUsers(users);
        } else {
          alert.show("Error fetching users ");
        }
      })
      .catch((err) => {
        alert.show(" Error ");
      });
  };

  const deleteAgent = (username) => {
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
      .delete(BASEURL + "account/" + username)
      .then((response) => {
        if (response.data.status === "success") {
          alert.success("Deleted Successfully ");
          handleAllusers();
        } else {
          alert.show("Some Error Occured");
        }
      })
      .catch((err) => {
        alert.show("Some Error Occured");
      });
  };
  useEffect(() => {
    if (localStorage.getItem("AdminToken") === "false") {
      history("/login");
    }
    handleAllusers();
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
        Add new Agent
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <AgentUpsert />
      </Modal>

      <Table sx={{ width: "90%", mx: 2 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Name</StyledTableCell>
            <StyledTableCell align='left'>Username</StyledTableCell>
            <StyledTableCell align='left'>Address</StyledTableCell>
            <StyledTableCell align='left'>Phone</StyledTableCell>
            <StyledTableCell align='left'>Email</StyledTableCell>
            <StyledTableCell align='left'>Active</StyledTableCell>
            <StyledTableCell align='left'>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) =>
            row.role === "agent" ? (
              <StyledTableRow key={row.id}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='left'>{row.username}</StyledTableCell>
                <StyledTableCell align='left'>{row.address}</StyledTableCell>
                <StyledTableCell align='left'>{row.phone}</StyledTableCell>
                <StyledTableCell align='left'>{row.email}</StyledTableCell>
                <StyledTableCell align='left'>
                  {row.active + ""}
                </StyledTableCell>
                <StyledTableCell align='left'>
                  <Button variant='text' color='secondary'>
                    Edit
                  </Button>
                  <Button
                    variant='text'
                    color='red'
                    onClick={(e) => {
                      deleteAgent(row.username);
                    }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              ""
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
