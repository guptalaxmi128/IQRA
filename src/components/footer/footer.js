import React from "react";
import './footer.css'
import {theme} from '../../theme'
import { Box, Typography, Grid, Link, Button } from "@mui/material";

const footer = () => {
  return (
    <>
      <Box mt='5vw' mr="5vw" ml="5vw">
        <Grid container spacing={"2vw"}>
          <Grid item xs={12} sm={6} md={3}>
            <Box mb='1vw'>
            <Typography variant="h7" >Address:</Typography>
            </Box>            
            <Typography variant="subtitle1">
              IQRA IAS Academy,<br/> Admission Help Line: +91 9823256625 & 9579247470
              (What’s App),<br/> Email: info@iqraias.com, support@iqraias.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
          <Box mb='1vw'>
          <Typography variant="h7">Visit at our Office:</Typography>
          </Box>
          
            <Typography variant="subtitle1">
              
                <Link sx={{textDecoration:'none', color:'inherit'}}>IQRA IAS, Pune</Link><br/>
                <Link sx={{textDecoration:'none', color:'inherit'}}>IQRA IAS, Kanpur</Link>
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Box mb='1vw'>
          <Typography variant="h7">Important Links</Typography>          </Box>
          
            <Typography variant="subtitle1">
                <Link sx={{textDecoration:'none', color:'inherit'}}>Frequently Asked Questions</Link>
                <Link sx={{textDecoration:'none', color:'inherit'}}>Past Year Question Papers</Link>
                <Link sx={{textDecoration:'none', color:'inherit'}}>Interview Guidance</Link>
                <Link sx={{textDecoration:'none', color:'inherit'}}>Careers</Link>
                <Link sx={{textDecoration:'none', color:'inherit'}}>Privacy Policy</Link>
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={6} md={3}>
          <Box mb='1vw'>
          <Typography variant="h7">Current Affairs Subscription</Typography>
          </Box>          
          <Button variant="text" sx={{textAlign:'left', paddingLeft:'0px'}}>Subscribe Now (Get Free Subscription)</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default footer;
