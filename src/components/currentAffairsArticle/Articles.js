import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
// import { Box } from '@mui/system'
import React from "react";
import { theme } from "../../theme";
import MoreLinks from "../currentAffairs/CurrentAffairsTable.js/MoreLinks";

const Articles = () => {
  return (
    <>
      <Box ml="5vw" mr="5vw">
        <Typography
          variant="subtitle1"
          mb={2}
          sx={{ color: theme.palette.active.main }}
        >
          28 September 2022
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", md: "row" },
            mb: 2,
          }}
        >
          <Box
            mr={{ md: "1.9vw", xs: "0vw" }}
            mb={{ md: "0vw", xs: "2vw" }}
            sx={{ width: { md: "70vw", xs: "90vw" } }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  IMEI Number
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Rating */}
                <Box mb="1vw" sx={{ display: "flex" }}>
                  <StarRoundedIcon sx={{ color: theme.palette.star.main }} />
                  <StarRoundedIcon sx={{ color: theme.palette.star.main }} />
                  <StarHalfRoundedIcon
                    sx={{ color: theme.palette.star.main }}
                  />
                  <StarOutlineRoundedIcon
                    sx={{ color: theme.palette.star.main }}
                  />
                  <StarOutlineRoundedIcon
                    sx={{ color: theme.palette.star.main }}
                  />
                </Box>
                {/* Tags */}
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body1">Tags:&nbsp;</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      mr="1vw"
                      p={"0.2vw 1vw"}
                      sx={{
                        backgroundColor: theme.palette.primary.tag,
                        borderRadius: "0.3vw",
                      }}
                    >
                      <Typography variant="body2">
                        Quick facts for Prelims
                      </Typography>
                    </Box>
                    <Box
                      mr="1vw"
                      p={"0.2vw 1vw"}
                      sx={{
                        backgroundColor: theme.palette.primary.tag,
                        borderRadius: "0.3vw",
                      }}
                    >
                      <Typography variant="body2">GS Paper-2</Typography>
                    </Box>
                    <Box
                      mr="1vw"
                      p={"0.2vw 1vw"}
                      sx={{
                        backgroundColor: theme.palette.primary.tag,
                        borderRadius: "0.3vw",
                      }}
                    >
                      <Typography variant="body2">
                        Government Policies and Interventions
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* Link */}
                <Box mt="1vw">
                  <Typography variant="subtitle2">
                    Important Facts for Prelims
                  </Typography>
                  {/* <Box sx={{height:'0.3vw',width:'4vw',color:theme.palette.primary.main}}/> */}
                  <Box
                    sx={{
                      height: "0.5vw",
                      // backgroundColor:'white',
                      backgroundColor: theme.palette.primary.hrule,
                      width: { md: "61vw", xs: "85vw" },
                    }}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>

            <Box
              mt={5}
              sx={{
                backgroundColor: "#e6ecfa",
                width: { md: "70vw", xs: "90vw", height: "20vh" },
                borderRadius: "0.3vw",
              }}
            >
              <Box ml={3}>
                <br />
                <h6>
                  <b>For Prelims:</b> National Clean Air Programme, World Bank
                </h6>
                <br />
                <h6>
                  <b> For Mains: </b> Environmental Pollution & Degradation
                </h6>
              </Box>
            </Box> 
          </Box>

          <Box sx={{ width: { md: "27vw", xs: "50vw" } }}>
            <MoreLinks />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Articles;
