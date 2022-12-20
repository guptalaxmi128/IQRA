import React from "react";
import "./CurrentAffairsTable.css";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
// import { Link } from '@mui/material';
import { Link } from "react-router-dom";

const DailyNews = () => {
  return (
    <>
      <Box className="pricing-features">
        <ul>
          <Box className="services-content" pl={"2vw"} pr={"2vw"}>
            <Grid container spacing={"0.5vw"}>
              <Grid item xs={12}>
                <Box className="box">
                  <i data-feather="globe"></i>
                  <Link to="/dailyNews/28Sep">28 September 2022</Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="box">
                  <Link to="/dailyNews/28Sep">
                    {" "}
                    <i data-feather="globe"></i> 28 September 2022
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ul>
      </Box>
    </>
  );
};

export default DailyNews;
