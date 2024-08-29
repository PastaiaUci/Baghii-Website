import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Team from '../components/OurTeamContent';

const About = () => {
    useDocTitle('Baghii | Our Team');

    return (
        <>
            <NavBar />
            <Team />
            <Footer />
        </>
    );
}

export default About;
