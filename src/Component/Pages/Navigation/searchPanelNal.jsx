import React, { useState, useEffect } from "react";
import moment from "moment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchPanel() {
  const [currentDate, setCurrentDate] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    return () => {
      setInterval(
        () => setCurrentDate(moment().format("MMMM Do YYYY, h:mm:ss a")),
        300
      );
    };
  }, []);

  return (
    <AppBar position='static' color='primary' enableColorOnDark>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          variant='dense'
          sx={{ pb: 1, display: { xs: "none", md: "flex" } }}
        >
          <Typography
            variant='subtitle2'
            noWrap
            component='div'
            sx={{ mr: 2, mb: -3, display: { xs: "none", md: "flex" } }}
          >
            {currentDate}
          </Typography>

          <TextField
            hiddenLabel
            id='filled-hidden-label-small'
            variant='standard'
            size='small'
            label='Betslip ID'
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon color='secondary' />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            hiddenLabel
            id='filled-hidden-label-small'
            variant='standard'
            size='small'
            label='Match'
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon color='secondary' />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            hiddenLabel
            id='filled-hidden-label-small'
            variant='standard'
            size='small'
            label='Users'
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon color='secondary' />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
