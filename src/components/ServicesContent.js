import React from 'react';

import webDevImg from '../images/services/web_design.png';
import videoEditingImg from '../images/services/video_editing.png';
import modelingImg from '../images/services/3d_modelling.png';
import printingImg from '../images/services/3d_printing.png';

const Services = () => {
    return (
        <div className="container mx-auto my-12 px-4 lg:px-10 lg:max-w-screen-2xl mt-[20px]" data-aos="fade-up">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>
                <p className="text-lg text-gray-500 mt-4">
                    We deliver tailored solutions to elevate your business.
                </p>
            </div>

            {/* Custom Web Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-16" data-aos="fade-up"> {/* Added animation */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-blue-900">Custom Web Development</h2>
                    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                        Polish your online presence with our top-tier web development services, backed by the expertise of two seasoned engineers with extensive experience at industry-leading companies like Amazon, Bitdefender, ESX, and Future Digital. Our team of professionals has successfully transformed the digital presence of numerous businesses and individuals, delivering responsive, user-friendly websites that not only look stunning but also drive significant engagement and growth. We tailor our approach to meet your specific needs, ensuring a seamless and impactful experience for your visitors. Trust in our proven track record to elevate your digital footprint.
                    </p>
                </div>
                <div className="order-1 lg:order-2 flex justify-center items-center" data-aos="fade-left"> {/* Added animation */}
                    <img src={webDevImg} alt="Web Development" className="w-full lg:w-2/3 rounded-lg shadow-lg" /> {/* Reduced width */}
                </div>
            </div>

            {/* Expert Video Editing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-16" data-aos="fade-up"> {/* Added animation */}
                <div className="order-1 flex justify-center items-center" data-aos="fade-right"> {/* Added animation */}
                    <img src={videoEditingImg} alt="Video Editing" className="w-full lg:w-2/3 rounded-lg shadow-lg" /> {/* Reduced width */}
                </div>
                <div className="order-2 flex items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900">Expert Video Editing</h2>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            Whether you’re a business, a YouTuber, or a TikToker, we offer professional video editing services that not only capture your vision but also effectively communicate your message. Our team includes a seasoned expert in communications who is also a master editor, ensuring that your content is not only visually stunning but also strategically crafted to resonate with your audience. From cutting-edge transitions to captivating effects, we work diligently to produce content that enhances your brand's story and connects deeply with your viewers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reliable 3D Printing Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-16" data-aos="fade-up"> {/* Added animation */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-blue-900">Reliable 3D Printing Services</h2>
                    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                        From prototypes to custom parts, our 3D printing services provide precise, high-quality solutions for bringing your designs to life. With an engineer on our team who has extensive experience in the automotive industry, we bring a level of technical expertise and attention to detail that ensures every project meets the highest standards. Whether you’re working on a small prototype or a large-scale production, we handle orders of all sizes with the same commitment to excellence, ensuring that your expectations are not just met, but exceeded. Trust in our industry-backed knowledge to deliver results that drive innovation.
                    </p>
                </div>
                <div className="order-1 lg:order-2 flex justify-center items-center" data-aos="fade-left"> {/* Added animation */}
                    <img src={printingImg} alt="3D Printing" className="w-full lg:w-2/3 rounded-lg shadow-lg" /> {/* Reduced width */}
                </div>
            </div>

            {/* Precision 3D Modeling */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-16" data-aos="fade-up"> {/* Added animation */}
                <div className="order-1 flex justify-center items-center" data-aos="fade-right"> {/* Added animation */}
                    <img src={modelingImg} alt="3D Modeling" className="w-full lg:w-2/3 rounded-lg shadow-lg" /> {/* Reduced width */}
                </div>
                <div className="order-2 flex items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900">Precision 3D Modeling</h2>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            Our 3D modeling services are ideal for creating custom parts or any design you envision. With an engineer on our team who has extensive experience in the automotive industry, we bring a level of precision and technical expertise that ensures every model is accurate and intricately detailed. From complex mechanical components to artistic designs, we deliver models suitable for a wide range of applications, helping you visualize, refine, and perfect your ideas before they come to life. With our industry knowledge and attention to detail, you can trust us to turn your vision into a flawless, functional reality.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12" data-aos="fade-up"> {/* Added animation */}
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to start your next project?</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Our team is here to collaborate with you and bring your vision to life. Get in touch today to discuss how we can support your goals with our tailored services.
                </p>
                <a href="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 text-lg shadow-xl rounded-2xl">
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default Services;
