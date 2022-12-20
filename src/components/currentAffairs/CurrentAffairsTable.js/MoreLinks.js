import React from 'react'
import "./CurrentAffairsTable.css";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Link } from '@mui/material';

const MoreLinks = () => {
  return (
    <>
        <Box className="pricing-table active-plan moreLinks">
                  <Box className="pricing-header">
                    <h3>More Links</h3>
                  </Box>

                  <Box className="pricing-features">
                    <ul>
                      <Box className="services-content" pl={'2vw'}pr={'2vw'}>
                        <Grid container spacing={'0.5vw'}>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Fir Safety
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Fir Safety
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Fir Safety
                          </Box>
                        </Grid>
                        </Grid>                        
                      </Box>
                    </ul>
                  </Box>
                </Box>
                <Box className="pricing-table active-plan">
                  <Box className="pricing-header">
                    <h3>What's New</h3>
                  </Box>
                  <Box className="pricing-features">
                    <ul>
                      <Box className="services-content" pl={'2vw'}pr={'2vw'} mb={'-0.3vw'}>
                        <Grid container spacing={'0.5vw'}>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Mohiniyattam
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Mohiniyattam
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Mohiniyattam
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box className="box">
                            <i data-feather="globe"></i> Mohiniyattam
                          </Box>
                        </Grid>
                        </Grid>                        
                      </Box>
                    </ul>
                  </Box>
                </Box>
    </>
  )
}

export default MoreLinks