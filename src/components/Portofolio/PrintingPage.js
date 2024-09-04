import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../components/css/printing_gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

import David from "../../images/team/david.png";
import Bogdan from "../../images/team/bogdan.png";
import Fos from "../../images/team/fos.png";
import Miganu from "../../images/team/miganu.png";

const PrintingPage = () => {
  const images = [David, Bogdan, Fos, Miganu, Miganu, David];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ScrollToTop>
      <NavBar />
      <div className="printing-page-container">
        <div className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-900">
            Our Printed Products
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Discover how amazing our printed products are and how they can
            elevate your brand.
          </p>
        </div>
        <div
          className="gallery-printing"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {images.map((src, index) => (
            <div className="clipped-border" key={index}>
              <img src={src} alt={`Gallery item ${index + 1}`} id="clipped" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default PrintingPage;
