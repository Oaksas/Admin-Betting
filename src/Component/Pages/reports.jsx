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
import { Box } from "@material-ui/core";
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
    2,
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
    3,
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
    4,
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
    5,
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
    6,
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
export default function Report() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div sx={{ m: 3 }}>
      <Box
        fullwidth
        alignItems='center'
        sx={{
          width: "100%",
          height: 300,
          p: 2,
        }}
      >
        <TableContainer component={Paper} sx={{ ml: 4, mt: 2, pb: 3 }}>
          <Table sx={{ width: "90%" }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='left'>Day</StyledTableCell>
                <StyledTableCell align='left'>Sold</StyledTableCell>
                <StyledTableCell align='left'>Won</StyledTableCell>
                <StyledTableCell align='left'>Cancelled</StyledTableCell>
                <StyledTableCell align='left'>Stakes</StyledTableCell>
                <StyledTableCell align='left'>Payouts</StyledTableCell>
                <StyledTableCell align='left'>Gross</StyledTableCell>
                <StyledTableCell align='left'>Payout %</StyledTableCell>
                <StyledTableCell align='left'>Sales</StyledTableCell>
                <StyledTableCell align='left'>Payments</StyledTableCell>
                <StyledTableCell align='left'>Cash</StyledTableCell>
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
                  <StyledTableCell align='left'>{row.protein}</StyledTableCell>
                  <StyledTableCell align='left'>{row.calories}</StyledTableCell>
                  <StyledTableCell align='left'>{row.fat}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
