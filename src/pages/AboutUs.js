import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import AboutContent from '../components/AboutContent';

const About = () => {
    useDocTitle('Baghii | About Us');

    return (
        <>
            <NavBar />
            <AboutContent />
            <Footer />
        </>
    );
}

export default About;
