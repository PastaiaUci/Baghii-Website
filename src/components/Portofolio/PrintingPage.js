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

import NanamiSatar1 from "../../images/prints/NanamiSatar1.jpeg";
import NanamiSatar2 from "../../images/prints/NanamiSatar2.jpeg";
import NanamiSatar3 from "../../images/prints/NanamiSatar3.jpeg";
import Cube1 from "../../images/prints/Cube1.png";
import Cube2 from "../../images/prints/Cube2.png";
import Cube3 from "../../images/prints/Cube3.png";
import InosukeSwords1 from "../../images/prints/InosukeSword1.png";
import InosukeSwords2 from "../../images/prints/InosukeSword2.png";
import InosukeSwords3 from "../../images/prints/InosukeSword3.png";
import InosukeSwords4 from "../../images/prints/InosukeSword4.png";
import Silencer1 from "../../images/prints/Silencer1.jpeg";
import Silencer2 from "../../images/prints/Silencer2.jpeg";
import Silencer3 from "../../images/prints/Silencer3.jpeg";
import Silencer4 from "../../images/prints/Silencer4.jpeg";
import M9Showcase from "../../videos/M9Showcase.mp4";

const PrintingPage = () => {
  const mediaItems = [
    { type: "image", src: InosukeSwords1 },
    { type: "image", src: InosukeSwords2 },
    { type: "image", src: InosukeSwords3 },
    { type: "image", src: InosukeSwords4 },
    { type: "image", src: NanamiSatar1 },
    { type: "image", src: NanamiSatar2 },
    { type: "image", src: NanamiSatar3 },
    { type: "image", src: Cube1 },
    { type: "image", src: Cube2 },
    { type: "image", src: Cube3 },
    { type: "image", src: Silencer1 },
    { type: "image", src: Silencer2 },
    { type: "image", src: Silencer3 },
    { type: "image", src: Silencer4 },
    { type: "video", src: M9Showcase },
  ];

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
          {mediaItems.map((item, index) => (
            <div className="clipped-border" key={index}>
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery item ${index + 1}`}
                  id="clipped"
                />
              ) : (
                <video
                  src={item.src}
                  alt={`Gallery video ${index + 1}`}
                  controls
                  id="clipped"
                  style={{ width: "100%" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default PrintingPage;
