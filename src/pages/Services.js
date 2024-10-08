import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import Services from '../components/ServicesContent';
import { useDocTitle } from '../components/CustomHook';

const Service = () => {
    useDocTitle('Baghii | Services');

    return (
        <>
            <NavBar />
            <Services />
            <Footer />
        </>
    );
}

export default Service;
