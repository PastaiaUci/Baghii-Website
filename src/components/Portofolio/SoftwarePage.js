import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../components/css/software_gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const SoftwarePage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <ScrollToTop>
            <NavBar />
            <div className="container" data-aos="fade-up">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900">Our Portfolio</h1>
                    <p className="text-lg text-gray-500 mt-4">
                        Discover some of our best work across the software development domain.
                    </p>
                </div>
                <div className="gallery-wrap">
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                    <div className="item item-5"></div>
                </div>
            </div>
            <Footer />
        </ScrollToTop>
    );
};

export default SoftwarePage;
