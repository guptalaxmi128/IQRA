import React, { useState } from "react";
import "./CurrentAffairsArchives.css";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { theme } from "../../../theme";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const themes = createTheme({
  components: {
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'rgb(255,255,255)',
    //       '&:hover': {
    //         backgroundColor: 'rgb(255, 255, 255)',
    //         '@media (hover: none)': {
    //           backgroundColor: 'rgb(255, 255, 255)',
    //         },
    //       },
    //       '&.Mui-focused': {
    //         backgroundColor: 'rgb(255, 255, 255)',
    //       },
    //     },
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          //   height: '3em',
          //   // fontSize: '14px',
          //   // textDecoration: 'none solid rgb(137,139,146)',
          //   backgroundColor:'red',
          //   borderRadius: '5px',
          fontFamily: "Poppins, sans-serif",
        },

        input: {
          padding: "7.5px 14px",
        },
      },
    },
  },
});

const CurrentAffairsArchives = () => {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <ThemeProvider theme={themes}>
        <Box mt={"11vw"} ml={"4.1vw"} mr={"4.1vw"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: "2vw",
                  backgroundColor: "#e6ecfa",
                  borderRadius: "5px",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box mb={"2vw"}>
                  <Typography variant="h6">Archive by Dates</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  mb="1vw"
                >
                  <Box mr={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        disableFuture
                        label="From Date"
                        openTo="year"
                        views={["year", "month", "day"]}
                        // value={myOrders.targetStartDate}
                        onChange={(newValue) => {
                          // setMyOrders({
                          // ...myOrders,
                          // targetStartDate: newValue,
                          // });
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>

                  <Box mr={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        disableFuture
                        label="To Date"
                        openTo="year"
                        views={["year", "month", "day"]}
                        // value={myOrders.targetStartDate}
                        onChange={(newValue) => {
                          // setMyOrders({
                          // ...myOrders,
                          // targetStartDate: newValue,
                          // });
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: theme.palette.secondary.main }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: "2vw",
                  backgroundColor: "#e6ecfa",
                  borderRadius: "5px",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box mb={"2vw"}>
                  <Typography variant="h6">Archive by Month & Year</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                  mb="1vw"
                >
                  <Box mr={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        disableFuture
                        label="From Date"
                        openTo="Month"
                        views={["month"]}
                        // value={myOrders.targetStartDate}
                        onChange={(newValue) => {
                          // setMyOrders({
                          // ...myOrders,
                          // targetStartDate: newValue,
                          // });
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box mr={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        disableFuture
                        label="Year"
                        openTo="year"
                        views={["year"]}
                        // value={myOrders.targetStartDate}
                        onChange={(newValue) => {
                          // setMyOrders({
                          // ...myOrders,
                          // targetStartDate: newValue,
                          // });
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: theme.palette.secondary.main }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>

      {/* for display mobile date start */}

      <Box
        className="pricing-area ptb-80 bg-f9f6f6"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box mb={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                // background: "linear-gradient(135deg, #23bdb8 0%, #43e794 100%)",
                background:"#f2f4f7",
              }}
            >
              <Box className="pricing-table1 active-plan">
                <Box className="pricing-header">
                  <h3>Archive by Dates</h3>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: { xs: "block", sm: "none" },
                }}
                mb="1vw"
              >
                <Box mr={1} mb={2} ml={1}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      fullWidth
                      disableFuture
                      label="From Date"
                      openTo="year"
                      views={["year", "month", "day"]}
                      // value={myOrders.targetStartDate}
                      onChange={(newValue) => {
                        // setMyOrders({
                        // ...myOrders,
                        // targetStartDate: newValue,
                        // });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <Box mr={1} mb={2} ml={1}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      fullWidth
                      disableFuture
                      label="To Date"
                      openTo="year"
                      views={["year", "month", "day"]}
                      // value={myOrders.targetStartDate}
                      onChange={(newValue) => {
                        // setMyOrders({
                        // ...myOrders,
                        // targetStartDate: newValue,
                        // });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <Box mr={1} ml={1}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: theme.palette.secondary.main }}
                    fullWidth
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          </Box>
        {/* </Box>
      </Box>

      <Box
        className="pricing-area ptb-80 bg-f9f6f6"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box mb={3}> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                // background: "linear-gradient(135deg, #23bdb8 0%, #43e794 100%)",
                background:"#f2f4f7",
              }}
            >
              <Box className="pricing-table1 active-plan">
                <Box className="pricing-header">
                  <h3>Archive by Month & Year</h3>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: { xs: "block", sm: "none" },
                }}
                mb="1vw"
                >
                  <Box mr={1} mb={2} ml={1}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        disableFuture
                        label="From Date"
                        openTo="Month"
                        views={["month"]}
                        // value={myOrders.targetStartDate}
                        onChange={(newValue) => {
                          // setMyOrders({
                          // ...myOrders,
                          // targetStartDate: newValue,
                          // });
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box mr={1} mb={2} ml={1}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        disableFuture
                        label="Year"
                        openTo="year"
                        views={["year"]}
                        // value={myOrders.targetStartDate}
                        onChange={(newValue) => {
                          // setMyOrders({
                          // ...myOrders,
                          // targetStartDate: newValue,
                          // });
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <Box  mr={1} ml={1}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: theme.palette.secondary.main }}
                    fullWidth
                  >
                    Search
                  </Button>
                </Box>
            </AccordionDetails>
          </Accordion>
        </Box>

      {/* <Box className=" bg-f7fafd archives" sx={{border:'1px solid black'}}>
        <Grid container spacing={3}>
          <Grid sm={12} md={6}>
            <Box className="single-features">
              <Box className="icon">
                <i data-feather="settings"></i>
              </Box>

              <h3>Archives by Date</h3>
              <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly',border:'1px solid black'}}>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Frm"
                      fullWidth
                      sx={{paddingRight:'10px'}}
                      disableFuture
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  </Box>
                <Box >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="To"
                      fullWidth
                      disableFuture
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
                <Box >
                  <Box className="pricing-footer archive-btn">
                    <a href="#" className="btn btn-primary">
                      Search
                    </a>
                  </Box>
                </Box>
            </Box>
          </Grid>
          <Grid sm={12} md={6}>
          <Box className="single-features">
              <Box className="icon">
                <i data-feather="settings"></i>
              </Box>

              <h3>Archives by Date</h3>
              <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly',border:'1px solid black'}}>
                <Box >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="From"
                      disableFuture
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Box >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="To"
                      disableFuture
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Box >
                  
                    <a href="#" className="btn btn-primary">
                      Search
                    </a>
                  
                </Box>
              </Box>
            </Box>
           
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
};

export default CurrentAffairsArchives;
