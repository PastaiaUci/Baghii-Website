import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import PortfolioContent from '../components/Portofolio/PortfolioContent';

const About = () => {
    useDocTitle('Baghii | Our Team');

    return (
        <>
            <NavBar />
            <PortfolioContent />
            <Footer />
        </>
    );
}

export default About;
