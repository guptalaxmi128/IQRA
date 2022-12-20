import logo from './logo.svg';
import './App.css';
 import Navbar from './components/navbar/Navbar'
import Main from './components/currentAffairs/Main';
import Footer from './components/footer/footer';
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from './components/currentAffairsArticle/Main';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import Articles from './components/currentAffairsArticle/Articles';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    {/* <Navbar /> */}
    {/* <CurrentAffairs /> */}
     {/* <Main/> */}
        <Routes>
        {/* <Route path="/" element={<CurrentAffairs />}></Route> */}
        <Route path="/" element={ <Main />}/>
        <Route path="/dailyNews/28Sep" element={ <Articles />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/about/aboutstyle1" element={ <About />} />
        </Routes>
        <Footer />
    </BrowserRouter>    
    </ThemeProvider>
     
    </>
  );
}

export default App;
