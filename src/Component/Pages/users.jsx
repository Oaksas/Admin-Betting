import React, { useState } from "react";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    1,
    "tmt",
    "tm1",
    "email",
    "Telephone",
    "Role",
    "Shop",
    "Status",
    "Actions"
  ),
  createData(
    1,
    "tmt",
    "tm1",
    "email",
    "Telephone",
    "Role",
    "Shop",
    "Status",
    "Actions"
  ),
  createData(
    1,
    "tmt",
    "tm1",
    "email",
    "Telephone",
    "Role",
    "Shop",
    "Status",
    "Actions"
  ),
  createData(
    1,
    "tmt",
    "tm1",
    "email",
    "Telephone",
    "Role",
    "Shop",
    "Status",
    "Actions"
  ),
  createData(
    1,
    "tmt",
    "tm1",
    "email",
    "Telephone",
    "Role",
    "Shop",
    "Status",
    "Actions"
  ),
  createData(
    1,
    "tmt",
    "tm1",
    "email",
    "Telephone",
    "Role",
    "Shop",
    "Status",
    "Actions"
  ),
];

export default function Users() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TableContainer component={Paper} sx={{ m: 4, pb: 3 }}>
      <Button
        variant='contained'
        color='secondary'
        sx={{
          float: "right",
          mb: 1,
        }}
        onClick={handleOpen}
      >
        Add new shop user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Upsert />
      </Modal>

      <Table sx={{ width: "100%" }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>ID</StyledTableCell>
            <StyledTableCell align='left'>Name</StyledTableCell>
            <StyledTableCell align='left'>Username</StyledTableCell>
            <StyledTableCell align='left'>Email</StyledTableCell>
            <StyledTableCell align='left'>Telephone</StyledTableCell>
            <StyledTableCell align='left'>Role</StyledTableCell>
            <StyledTableCell align='left'>Shop</StyledTableCell>
            <StyledTableCell align='left'>Status</StyledTableCell>
            <StyledTableCell align='left'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='left'>{row.calories}</StyledTableCell>
              <StyledTableCell align='left'>{row.fat}</StyledTableCell>
              <StyledTableCell align='left'>{row.carbs}</StyledTableCell>
              <StyledTableCell align='left'>{row.protein}</StyledTableCell>
              <StyledTableCell align='left'>{row.calories}</StyledTableCell>
              <StyledTableCell align='left'>{row.fat}</StyledTableCell>
              <StyledTableCell align='left'>{row.protein}</StyledTableCell>
              <StyledTableCell align='left'>
                <Button variant='text' color='secondary'>
                  Edit
                </Button>
                <Button variant='text' color='red'>
                  Delete
                </Button>
                <Button variant='text' color='colorDanger'>
                  Lock
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
