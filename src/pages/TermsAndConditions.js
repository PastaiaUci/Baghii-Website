import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";
import { useDocTitle } from "../components/CustomHook";

const Service = () => {
  useDocTitle("Baghii | Services");

  return (
    <>
      <NavBar />
      <TermsAndConditions />
      <Footer />
    </>
  );
};

export default Service;
