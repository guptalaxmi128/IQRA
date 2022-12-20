import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
// import { Box } from '@mui/system'
import React, { useState, useEffect } from "react";
import { theme } from "../../theme";
import MoreLinks from "../currentAffairs/CurrentAffairsTable.js/MoreLinks";
import axios from "axios";

const Articles = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticle();
  });

  async function getArticle() {
    try {
      const article = await axios.get(
        "https://iqra-twfr.onrender.com/api/master/articles"
      );
      // console.log(article.data);
      setArticle(article.data)
    } catch (error) {
      console.log("Something is wrong");
    }
  }

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
           {
                  article.map((item)=>{
                    return (  <div key={item.id}> 
            <Accordion>

           
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Box >
               <Typography
                  variant="p"
                  sx={{ color: theme.palette.text.dark }}
                  
                >
                  {/* IMEI Number */}{item.subject}
                </Typography>
               
                 <br/>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {/* IMEI Number */}{item.heading}
                </Typography>
                </Box>
               
              </AccordionSummary>
              <Box
                    sx={{
                      height: "0.5vw",
                      // backgroundColor:'white',
                      backgroundColor: theme.palette.primary.hrule,
                      width: { md: "61vw", xs: "85vw" },
                      
                    }}
                    ml={2}
                  />
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
                        {/* Quick facts for Prelims */}
                        {item.tags[0]}
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
                      <Typography variant="body2">{item.tags[1]}</Typography>
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
                        {/* Government Policies and Interventions */}
                        {item.tags[2]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              

                <Box
                  mt={5}
                  sx={{
                    backgroundColor: "#e6ecfa",
                    width: { md: "67.5vw", xs: "85vw", height: "20vh" },
                    borderRadius: "0.3vw",
                  }}
                >
                  {/* Link */}
                  <Box mt="1vw" ml={2}>
                  <Typography variant="subtitle2">
                    Important Facts for Prelims
                  </Typography>
                  {/* <Box sx={{height:'0.3vw',width:'4vw',color:theme.palette.primary.main}}/> */}
                 
                </Box>
                  <Box sx={{ padding: "20px" }} mb={5}>
                    <p>
                      <strong>For Prelims:</strong> National Clean Air
                      Programme, World Bank
                    </p>
                    <p>
                      <strong> For Mains: </strong> Environmental Pollution &
                      Degradation
                    </p>
                  </Box>
                </Box>

                <Box
                  mt={3}
                  sx={{
                    backgroundColor: "#fff",
                    width: { md: "67.5vw", xs: "85vw", height: "100vh" },
                  }}
                >
                  <Box sx={{ padding: "20px" }} mb={3}>
                    <h5>Why in News?</h5>
                    <p>
                      Recently, the{" "}
                      <a
                        href="https://www.google.com/search?q=world+bank+drishti+ias&amp;rlz=1C1VDKB_enIN1009IN1009&amp;oq=World+Bank+dri&amp;aqs=chrome.1.69i57j69i59.2098j0j7&amp;sourceid=chrome&amp;ie=UTF-8"
                        target="_blank"
                        rel="noopener"
                      >
                        <strong>World Bank</strong>
                      </a>{" "}
                      released a{" "}
                      <strong>
                        report titled 'Striving for Clean Air: Air Pollution and
                        Public Health in South Asia'.
                      </strong>
                    </p>
                    <ul style={{ listStyleType: "square" }}>
                      <li>
                        The report
                        <strong>
                          {" "}
                          details how persisting with policies currently being
                          implemented
                        </strong>{" "}
                        (largely since 2018) will yield results but not to the
                        desired level.
                      </li>
                    </ul>
                    <h5>What are the Highlights of the Report?</h5>
                    <ul style={{ listStyleType: "square" }}>
                      <li>
                        <strong>Airsheds:</strong>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Six large airsheds exist in South Asia, where the
                            air quality in one can affect the air quality in
                            another. They are:
                            <ul style={{ listStyleType: "disc" }}>
                              <li>
                                <strong>
                                  West/Central Indo-Gangetic Plain (IGP)
                                </strong>{" "}
                                that included Punjab (Pakistan), Punjab (India),
                                Haryana, part of Rajasthan, Chandigarh, Delhi,
                                Uttar Pradesh.
                              </li>
                              <li>
                                <strong>Central/Eastern IGP:</strong> Bihar,
                                West Bengal, Jharkhand, Bangladesh
                              </li>
                              <li>
                                <strong>Middle India:</strong>{" "}
                                Odisha/Chhattisgarh
                              </li>
                              <li>
                                <strong>Middle India:</strong> Eastern
                                Gujarat/Western Maharashtra
                              </li>
                              <li>
                                <strong>
                                  Northern/Central Indus River Plain:
                                </strong>{" "}
                                Pakistan, part of Afghanistan; and
                              </li>
                              <li>
                                <strong>
                                  Southern Indus Plain and further west:
                                </strong>{" "}
                                South Pakistan, Western Afghanistan extending
                                into Eastern Iran.
                              </li>
                            </ul>
                          </li>
                          <li>
                            When the wind direction was predominantly northwest
                            to the southeast,
                            <strong>
                              {" "}
                              30% of the air pollution in Indian Punjab came
                              from the Punjab Province in Pakistan
                            </strong>{" "}
                            and, on average, 30% of the air pollution in the
                            largest cities of Bangladesh (Dhaka, Chittagong, and
                            Khulna) originated in India. In some years,
                            substantial pollution flowed in the other direction
                            across borders.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Exposure to PM 2.5:</strong>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Currently over{" "}
                            <strong>
                              60% of South Asians are exposed to an average 35
                              µg/m3 of PM2.5 annually.
                            </strong>
                          </li>
                          <li>
                            In some parts of the <strong>IGP</strong> it spiked
                            to as much as 100 µg/m<sup>3</sup> – nearly 20 times
                            the upper limit of 5 µg/m<sup>3</sup> recommended by
                            the{" "}
                            <a
                              href="/important-institutions/drishti-specials-important-institutions-international-institution/world-health-organization-who"
                              target="_blank"
                              rel="noopener"
                            >
                              <strong>World Health Organisation (WHO).</strong>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Dominant Sources of Air Pollution:</strong>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Large industries, power plants and vehicles are
                            dominant sources of air pollution around the world,
                            but in South Asia, other sources make substantial
                            additional contributions.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Box>
                </Box>

                <Box
                  mt={3}
                  sx={{
                    backgroundColor: "#e6ecfa",
                    width: { md: "67.5vw", xs: "85vw", height: "100vh" },
                    borderRadius: "0.3vw",
                  }}
                >
                  <Box sx={{ padding: "20px" }} mb={3}>
                    <h5 style={{ textAlign: "center" }}>
                      UPSC Civil Services Examination Previous Year Question
                      (PYQ)
                    </h5>
                    <h6>
                      <em>
                        <span style={{ textDecoration: "underline" }}>
                          {/* Prelims */}
                          {item.prelims}
                        </span>
                      </em>
                    </h6>
                    <p>
                      <strong> {item.question} 
                      {item.questionHeading}
                        {/* Q. In the cities of our country, which among the
                        following atmospheric gases are normally considered in
                        calculating the value of Air Quality Index? (2016) */}
                      </strong>
                    </p>
                    <ol>
                      <li> Carbon dioxide </li>
                      <li>Carbon monoxide</li>
                      <li>Nitrogen dioxide</li>
                      <li>Sulfur dioxide</li>
                      <li>Methane</li>
                    </ol>
                    <p>Select the correct answer using the code given below:</p>
                    <p>
                      <strong>(a)</strong> {item.options.optionA} <br />
                      <strong>(b)</strong>  {item.options.optionB} <br />
                      <strong>(c)</strong>  {item.options.optionC} <br />
                      <strong>(d)</strong>  {item.options.optionD}
                    </p>
                    <p>
                      <strong>Ans: {item.answer}</strong>
                    </p>
                    <hr />
                    <h6>
                      <em>
                        <span style={{ textDecoration: "underline" }}>
                          {/* Mains */}{item.mains}
                        </span>
                      </em>
                    </h6>
                    <p>
                      <p>
                        Q. Describe the key points of the revised Global Air
                        Quality Guidelines (AQGs) recently released by the World
                        Health Organisation (WHO). How are these different from
                        its last update in 2005? What changes in India’s
                        National Clean Air Programme are required to achieve
                        revised standards?
                        <strong>(2016)</strong>
                      </p>
                    </p>
                  </Box>
                </Box>
                </AccordionDetails>
                </Accordion>
                </div>)
                
                  })
                }
          
           
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
