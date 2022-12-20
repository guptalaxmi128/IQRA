import React from "react";
import "./CurrentAffairsTable.css";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DailyNews from "./DailyNews";
import Editorials from "./Editorials";
import MoreLinks from "./MoreLinks";

const CurrentAffairsTable = () => {
  return (
    <>
      <Box
        className="pricing-area ptb-80 bg-f9f6f6"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: { xs: "column", md: "row" },
              mb: 1,
            }}
          >
            <Box sx={{ width: { md: "31vw", xs: "100%" } }} mb={"2vw"}>
              <Box className="pricing-table active-plan">
                <Box className="pricing-header">
                  <h3>Weekly News</h3>
                </Box>
                <DailyNews />
              </Box>
            </Box>
            <Box sx={{ width: { md: "31vw", xs: "100%" } }} mb={"2vw"}>
              <Box className="pricing-table active-plan">
                <Box className="pricing-header">
                  <h3>Important Issues</h3>
                </Box>
                <Editorials />
              </Box>
            </Box>

            <Box sx={{ width: { md: "25vw", xs: "50%" } }}>
              <MoreLinks />
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box
        className="pricing-area ptb-30 bg-f9f6f6"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box mb={3} mt={-2}>
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
                  <h3>Weekly News</h3>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <DailyNews />
            </AccordionDetails>
          </Accordion>
        </Box>
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
                <h3>Important Issues</h3>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Editorials />
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default CurrentAffairsTable;
