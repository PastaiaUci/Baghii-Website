import React from 'react';
import { Link } from 'react-router-dom';

import webDevImg from '../../images/services/web_design.png';
import videoEditingImg from '../../images/services/video_editing.png';
import modelingImg from '../../images/services/3d_modelling.png';
import printingImg from '../../images/services/3d_printing.png';


const portfolioItems = [
    {
        title: 'Custom Web Development',
        description: 'Explore our web development projects that showcase our expertise in creating robust and user-friendly websites.',
        image: webDevImg,
        link: '/portfolio/software-developed',
    },
    {
        title: 'Expert Video Editing',
        description: 'Check out our video editing projects that demonstrate our ability to create compelling visual content.',
        image: videoEditingImg,
        link: '/portfolio/video-editing',
    },
    {
        title: 'Precision 3D Modeling',
        description: 'View our 3D modeling projects that highlight our precision and technical expertise in design.',
        image: modelingImg,
        link: '/portfolio/3d-modelling',
    },
    {
        title: 'Reliable 3D Printing',
        description: 'See our 3D printing projects where we bring designs to life with high-quality results.',
        image: printingImg,
        link: '/portfolio/3d-printing',
    },
];

const PortfolioContent = () => {
    return (
        <div className="container mx-auto my-12 px-4 lg:px-10 lg:max-w-screen-2xl mt-[110px]" data-aos="fade-up">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900">Our Portfolio</h1>
                <p className="text-lg text-gray-500 mt-4">
                    Discover some of our best work across various domains.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h2>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <Link to={item.link} className="text-blue-900 hover:underline font-semibold">
                            View Details &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioContent;
