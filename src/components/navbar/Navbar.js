import React from "react";
import "./Navbar.css";
import { border, Box, Button } from "@mui/material";
import { theme } from "../../theme";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginModal from "./LoginModal";
import logo_img from "../../images/navImg.png";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import Dropdown from "./Dropdown";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "3px",
};



const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <header id="header" className="headroom">
        <Box className="startp-responsive-nav">
          <Box
          // className="container"
          >
            <Box className="startp-responsive-menu">
              <Box className="logo black-logo">
                <a href="index.html">
                  {/* <img src="https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo"/> */}
                </a>
              </Box>
              {/* <Box className="logo white-logo">
                            <a href="index.html">
                                <img src="assets/img/white-logo.png" alt="logo"/>
                            </a>
                        </Box> */}
            </Box>
          </Box>
        </Box>

        <Box className="startp-nav">
          <Box
            ml={"5vw"}
            mr={"5vw"}
            //  className="container"
          >
            <nav className="navbar navbar-expand-md navbar-light">
              {/* <a className="navbar-brand black-logo" href="index.html"><img src="https://www.iqraias.com/wp-content/uploads/2019/05/iqra-ias-pune-logo.png" alt="logo"/></a> */}
              {/* <a className="navbar-brand white-logo" href="index.html"><img src="assets/img/white-logo.png" alt="logo"/></a> */}
              {/* <img src="https://www.iqraias.com/wp-content/uploads/2019/05/iqra-ias-pune-logo.png" alt="logo"/>
						<img src="https://plus.unsplash.com/premium_photo-1661398384449-2fd83db2f8cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo"/> */}
              {/* <img className='logo__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqKwilKfqpTsgGO1tLy5CL0pA-Jq_Pw1I_xoRi9Ti&s" alt="logo"/> */}
              <Box
                sx={{
                  height: "100px",
                  width: "100px",
                }}
              >
                <img src={logo_img} height="90vw" width="90vw" />
              </Box>
              <Box
                // className="others-option"
                className="navbar-nav nav ml-auto"
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: theme.palette.secondary.main, mr: 3 }}
                  //  onClick={onDownload}
                >
                  <a
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    download>
                    Download
                    App
                    {" "}
                  </a>
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: theme.palette.secondary.main }}
                  onClick={handleOpen}
                >
                  Login
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <LoginModal />
                  </Box>
                </Modal>
              </Box>
            </nav>
          </Box>
        </Box>

         <Box className="others-option-for-responsive">
          <Box className="container">
          

            {/* <Box className="container">
              <Box className="option-inner">
                <Box className="others-option">
                  <a href="login.html" className="btn btn-primary">
                    Login
                  </a>
                </Box>
              </Box>
            </Box> */}
          </Box>
        </Box> 
      </header>
    </>
  );
};

export default Navbar;
