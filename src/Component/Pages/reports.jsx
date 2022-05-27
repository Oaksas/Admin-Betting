import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import TextField from "@mui/material/TextField";

import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import "../../Style/main.css";
import "reactjs-popup/dist/index.css";
import Upsert from "./Popups/userUpsert";
import { Box } from "@material-ui/core";
import Coin from "react-cssfx-loading/lib/CircularProgress";

import { useNavigate } from "react-router-dom";
import axios from "axios";
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
];

export default function Report() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [reports, setReports] = useState([]);
  const [date, setDate] = React.useState("");
  const [cashier, setCashier] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [shop, setShop] = React.useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
    handleSelectedDate();
  };
  const handleCashierChange = (event) => {
    setDate(event.target.value);
    handleSelectedCashier();
  };
  const handleShopChange = (event) => {
    setDate(event.target.value);
    handleSelectedShop();
  };
  const handleMonthChange = (event) => {
    setDate(event.target.value);
    handleSelectedMonth();
  };

  const [processing, setProcessing] = useState(false);

  const handleSelectedDate = () => {
    setProcessing(true);

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("tokenAdmin")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "report/adminreport")
      .then((response) => {
        if (response.data.report.data) {
          var report = response.data.report.data;
          setReports(report);
          setProcessing(false);
          alert.success("Response ");
          report.forEach((r) => {
            console.log(r);
          });
        } else {
          setProcessing(false);
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
  };

  const handleSelectedCashier = () => {
    setProcessing(true);

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("tokenAdmin")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "report/adminreport")
      .then((response) => {
        if (response.data.report.data) {
          var report = response.data.report.data;
          setReports(report);
          setProcessing(false);
          alert.success("Response ");
          report.forEach((r) => {
            console.log(r);
          });
        } else {
          setProcessing(false);
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
  };

  const handleSelectedShop = () => {
    setProcessing(true);

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("tokenAdmin")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "report/adminreport")
      .then((response) => {
        if (response.data.report.data) {
          var report = response.data.report.data;
          setReports(report);
          setProcessing(false);
          alert.success("Response ");
          report.forEach((r) => {
            console.log(r);
          });
        } else {
          setProcessing(false);
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
  };

  const handleSelectedMonth = () => {
    setProcessing(true);

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("tokenAdmin")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "report/adminreport")
      .then((response) => {
        if (response.data.report.data) {
          var report = response.data.report.data;
          setReports(report);
          setProcessing(false);
          alert.success("Response ");
          report.forEach((r) => {
            console.log(r);
          });
        } else {
          setProcessing(false);
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
  };

  const handleAllReport = () => {
    setProcessing(true);

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("tokenAdmin")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .post(BASEURL + "report/adminreport")
      .then((response) => {
        if (response.data.report.data) {
          var report = response.data.report.data;
          setReports(report);
          setProcessing(false);
          alert.success("Response ");
          report.forEach((r) => {
            console.log(r);
          });
        } else {
          setProcessing(false);
          alert.show("Some Error ");
        }
      })
      .catch((err) => {
        setProcessing(false);
      });
  };
  useEffect(() => {
    handleAllReport();
  }, []);
  return processing ? (
    <Coin
      color='#0066ff'
      width='50px'
      height='50px'
      duration='2s'
      marginWidth={"100"}
    />
  ) : (
    <div sx={{ m: 3 }}>
      <ButtonGroup
        variant='contained'
        aria-label='outlined  button group'
        color='secondary'
        sx={{ width: 300, mt: 2 }}
      >
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Shop</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={shop}
            label='Shop'
            onChange={handleShopChange}
          >
            <MenuItem value={1}>Shop1</MenuItem>
            <MenuItem value={2}>Shop2</MenuItem>
            <MenuItem value={3}>Shop3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Cashier</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={cashier}
            label='Cashier'
            onChange={handleCashierChange}
          >
            <MenuItem value={1}>Cashier1</MenuItem>
            <MenuItem value={2}>Cashier2</MenuItem>
            <MenuItem value={3}>Cashier3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Month</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={month}
            label='Month'
            onChange={handleMonthChange}
          >
            <MenuItem value={1}>Month1</MenuItem>
            <MenuItem value={2}>Month2</MenuItem>
            <MenuItem value={3}>Month3</MenuItem>
          </Select>
        </FormControl>
      </ButtonGroup>
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
                <StyledTableCell align='left'>Date</StyledTableCell>
                <StyledTableCell align='left'>Sold</StyledTableCell>
                <StyledTableCell align='left'>Won</StyledTableCell>
                <StyledTableCell align='left'>Cancelled</StyledTableCell>
                <StyledTableCell align='left'>Stakes</StyledTableCell>
                <StyledTableCell align='left'>Paid</StyledTableCell>
                <StyledTableCell align='left'>Unpaid</StyledTableCell>
                <StyledTableCell align='left'>Cash</StyledTableCell>
                <StyledTableCell align='left'>Payout</StyledTableCell>
                <StyledTableCell align='left'>Win %</StyledTableCell>
                <StyledTableCell align='left'>Payout %</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((row, key) => (
                <StyledTableRow key={key}>
                  <StyledTableCell component='th' scope='row'>
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.sold}</StyledTableCell>
                  <StyledTableCell align='right'>{row.won}</StyledTableCell>
                  <StyledTableCell align='right'>{row.cancled}</StyledTableCell>
                  <StyledTableCell align='right'>{row.stake}</StyledTableCell>
                  <StyledTableCell align='right'>{row.paid}</StyledTableCell>
                  <StyledTableCell align='right'>{row.unpaid}</StyledTableCell>
                  <StyledTableCell align='right'>{row.cash}</StyledTableCell>
                  <StyledTableCell align='right'>{row.payout}</StyledTableCell>

                  <StyledTableCell align='right'>
                    {row.winPercent}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.payoutPercent}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
