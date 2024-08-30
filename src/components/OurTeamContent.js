import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './css/style.css';

import David from '../images/team/david.png';
import Bogdan from '../images/team/bogdan.png';
import Fos from '../images/team/fos.png';
import Miganu from '../images/team/miganu.png';

const teamMembers = [
    {
        name: 'Luca David Ștefan',
        position: 'Lead Web Developer',
        testimonial: 'David is a skilled software developer with experience at MBN, ESX, and Bitdefender. He specializes in creating robust software solutions, bringing valuable expertise from his work with top tech companies.',
        image: David,
    },
    {
        name: 'Smău Bogdan Ioan',
        position: 'Head of Video Editing',
        testimonial: 'Bogdan, an ex-military professional, excels in video editing and communication strategies. He has guided over 10 individuals to social media success, crafting compelling visual content that resonates with audiences.',
        image: Bogdan,    
    },
    {
        name: 'Rachieru Ștefan-Valentin',
        position: '3D Design Lead',
        testimonial: 'Stefan is an engineer in the automotive industry, specializing in 3D modeling and 3D printing. His expertise ensures precision and quality in every project, from custom parts to complex prototypes.',
        image: Fos,    
    },
    {
        name: 'Bîrjovanu Matei-Constantin',
        position: 'Lead Backend Developer',
        testimonial: 'Matei, a former Amazon developer, is known for his ability to solve complex problems and deliver innovative solutions. His vast experience ensures every software project is executed with precision and excellence.',
        image: Miganu,    
    },
];

const Team = () => {
    return (
        <div className="bg-gray-100 py-16 px-8 relative" data-aos="fade-up">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-4 mt-[90px]" data-aos="fade-down">Our Team</h2>
                <p className="text-lg text-gray-600 mb-12" data-aos="fade-down" data-aos-delay="100">
                    Our endorsement means nothing unless you get to know who and how amazing we and our craft are.<br/>
                    Our team of experts is dedicated to delivering excellence across various fields, ensuring every project is completed with precision and innovation.
                </p>
                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        750: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    data-aos-delay="200"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-44 h-44 rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-blue-900 font-semibold">{member.position}</p>
                                <p className="text-gray-600 mt-4">{member.testimonial}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2"></div>
            <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2"></div>
        </div>
    );
};

export default Team;
