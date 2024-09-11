import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Portofolio from "./pages/Portofolio";
import TermsAndConditions from "./pages/TermsAndConditions";
import VideoEditingPage from "./components/Portofolio/VideoEditingPage";
import PrintingPage from "./components/Portofolio/PrintingPage";
import SoftwarePage from "./components/Portofolio/SoftwarePage";
import ModellingPage from "./components/Portofolio/ModellingPage";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Baghii | Services from personal to industrial needs!");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route
              path="/portfolio/video-editing"
              element={<VideoEditingPage />}
            />
            <Route path="/portfolio/3d-printing" element={<PrintingPage />} />
            <Route path="/portfolio/3d-modelling" element={<ModellingPage />} />
            <Route
              path="/portfolio/software-developed"
              element={<SoftwarePage />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
