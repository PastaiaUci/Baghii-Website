import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import Modal from './Modal'; 
import '../../components/css/modelling_gallery.css';  // Import the CSS here

import stl1 from '../../stls/Blade_tip.stl';
import stl2 from '../../stls/Hilt1.stl';

import David from '../../images/team/david.png';
import Bogdan from '../../images/team/bogdan.png';
import Fos from '../../images/team/fos.png';
import Miganu from '../../images/team/miganu.png';

const images = [
  {
    href: "https://unsplash.com/@jeka_fe",
    src:David,
    alt: "Portrait by Jessica Felicio",
    caption: "Portrait by Jessica Felicio",
    stlPath: stl1
  },
  {
    href: "https://unsplash.com/@jeka_fe",
    src: Fos,
    caption: "Portrait by Jessica Felicio",
    stlPath: stl2
  },
  {
    href: "https://unsplash.com/@jeka_fe",
    src: Bogdan,
    alt: "Portrait by Jessica Felicio",
    caption: "Portrait by Jessica Felicio",
    stlPath: stl2
  },
  {
    href: "https://unsplash.com/@jeka_fe",
    src: Miganu,
    alt: "Portrait by Jessica Felicio",
    caption: "Portrait by Jessica Felicio",
    stlPath: stl2
  }
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
          <h1 className="text-4xl font-bold text-blue-900">Our Printed Products</h1>
          <p className="text-lg text-gray-700 mt-2">
            Discover how amazing our printed products are and how they can elevate your brand.
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
                <img src={image.src} alt={image.alt} className="gallery__image" />
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
      <Modal isOpen={isModalOpen} onClose={closeModal} stlPath={currentStlPath} />
    </ScrollToTop>
  );
};

export default PrintingPage;
