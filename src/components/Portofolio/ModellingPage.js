import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Modal from "./Modal";
import "../../components/css/modelling_gallery.css";

import Silencer from "../../stls/silencer.stl";
import Bayonet from "../../stls/bayonet.stl";
import FMS from "../../stls/fms.stl";
import InosukeSwords from "../../stls/inosuke_swords.stl";

import SilencerImg from "../../images/prints/Silencer1.jpeg";
import BayonetImg from "../../images/prints/Bayonet.jpeg";
import InosukeSowrdsImg from "../../images/prints/InosukeSword3.png";
import FmsImg from "../../images/prints/fms1.jpeg";

const images = [
  {
    src: SilencerImg,
    alt: "Pistol Silencer",
    caption: "Silencer for an airsoft gun",
    stlPath: Silencer,
  },
  {
    src: BayonetImg,
    alt: "M9 Bayonet",
    caption: "M9|Bayonet from CS2",
    stlPath: Bayonet,
  },
  {
    src: InosukeSowrdsImg,
    alt: "Inosuke Swords",
    caption: "Swords of the Inosuke character",
    stlPath: InosukeSwords,
  },
  {
    src: FmsImg,
    alt: "Full Moon Sword",
    caption: "FMS from Metin2 online Game",
    stlPath: FMS,
  },
];

const PrintingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentStlPath, setCurrentStlPath] = useState(null);

  const openModal = (stlPath) => {
    setCurrentStlPath(stlPath);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentStlPath(null);
  };

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
        <div className="gallery" data-aos="fade-up" data-aos-delay="200">
          {images.map((image, index) => (
            <a
              href={image.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery__link"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                openModal(image.stlPath);
              }}
            >
              <figure className="gallery__thumb">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery__image"
                />
                <figcaption className="gallery__caption">
                  <p className="caption-title">{image.alt}</p>
                  <p className="caption-description">{image.caption}</p>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        stlPath={currentStlPath}
      />
    </ScrollToTop>
  );
};

export default PrintingPage;
