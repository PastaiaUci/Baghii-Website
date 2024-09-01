import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import Portofolio from './pages/Portofolio';
import VideoEditingPage from './components/Portofolio/VideoEditingPage';
import PrintingPage from './components/Portofolio/PrintingPage';
import SoftwarePage from './components/Portofolio/SoftwarePage';
import ModellingPage from './components/Portofolio/ModellingPage';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Baghii | Services from personal to industrial needs!");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            
            {/* For deplyoyment on GH Pages use this + add on package.json this: "homepage": "https://pastaiauci.github.io/baghii-website", */}
            <Route path="/baghii-website" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/portfolio/video-editing" element={<VideoEditingPage />} />
            <Route path="/portfolio/3d-printing" element={<PrintingPage />} />
            <Route path="/portfolio/3d-modelling" element={<ModellingPage />} />
            <Route path="/portfolio/software-developed" element={<SoftwarePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
