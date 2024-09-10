import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/about"
      >
        About
      </Link>
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/services"
      >
        Services
      </Link>
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/our-team"
      >
        Our Team
      </Link>
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/portofolio"
      >
        Portfolio
      </Link>
      <Link
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        to="/contact"
      >
        Contact Us
      </Link>
    </>
  );
};

export default NavLinks;
