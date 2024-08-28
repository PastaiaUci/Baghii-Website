import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
    return (
        <div id="about" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
            <div className="container mx-auto my-8 px-4 lg:px-10 lg:max-w-screen-2xl" data-aos="fade-up">
                <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">About Baghii</h1>
                    </div>
                    <div className="mt-5 text-gray-700">
                        <p className="text-lg leading-relaxed mb-4">
                            At <strong>Baghii</strong>, we are a dynamic team of developers, engineers, and creative professionals dedicated to delivering innovative digital solutions that transform ideas into reality. We aim to empower businesses and individuals through cutting-edge technology and personalized services that drive growth and creativity.
                        </p>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We envision a world where technology seamlessly integrates into every aspect of life, enhancing creativity, efficiency, and convenience. Our goal is to be at the forefront of this transformation, providing services that help our clients innovate and succeed.
                        </p>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Our mission is to craft high-quality, customized digital solutions that cater to the unique needs of each client. Whether you’re a small business looking to enhance your digital presence or a large corporation seeking advanced technical solutions, we are here to support your journey to success.
                        </p>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Do</h2>
                        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                            <li><b>Web & Software Development:</b> Building responsive, high-performance websites and custom software that drive business growth.</li>
                            <li><b>Video Editing: </b>Creating visually compelling videos that tell your story and engage your audience.</li>
                            <li><b>3D Modeling: </b>Designing intricate 3D models for a variety of applications, from product design to custom pieces.</li>
                            <li><b>3D Printing: </b>Bringing your designs to life with precise and high-quality 3D printing services.</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Approach</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We take a client-first approach to every project, starting with a deep understanding of your needs, challenges, and goals. From there, we collaborate closely with you to design and implement solutions that not only meet but exceed your expectations.
                        </p>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                            <li>Expertise: Our team comprises skilled professionals with extensive experience in their respective fields.</li>
                            <li>Customization: Every solution we provide is tailored to fit your specific needs and objectives.</li>
                            <li>Commitment: We are dedicated to your success and are always here to provide ongoing support.</li>
                            <li>Innovation: We stay ahead of the curve, utilizing the latest technologies and techniques to deliver exceptional results.</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                            <li>Integrity: We operate with transparency, honesty, and ethical practices in all that we do.</li>
                            <li>Quality: We are committed to delivering excellence in every project, no matter the size.</li>
                            <li>Innovation: We embrace creativity and continuously seek new ways to solve challenges.</li>
                            <li>Collaboration: We believe in close collaboration with our clients and within our team to achieve the best results.</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We’re excited to collaborate with you on your next project. Whether you need a new website, a software solution, or innovative 3D services, we’re here to help your business thrive. Reach out to us today and let's bring your vision to life.
                        </p>
                        <div className="my-2">
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 my-4 text-lg shadow-xl rounded-2xl">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
