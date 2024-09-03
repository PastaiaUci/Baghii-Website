import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../components/css/style.css';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

import video1 from '../../videos/1.mp4';
import video2 from '../../videos/2.mp4';

const videoItems = [
    {
        title: 'Project 1',
        videoSrc: video1,
    },
    {
        title: 'Project 2',
        videoSrc: video2,
    },
    {
        title: 'Project 3',
        videoSrc: video1,
    },
    {
        title: 'Project 4',
        videoSrc: video2,
    },
];

const VideoEditingPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <NavBar />
            <div className="video-editing-container" data-aos="fade-up">
                <h1 className="video-editing-title">Video Editing Projects</h1>
                <h2 className="video-editing-subtitle" data-aos="fade-right" data-aos-delay="200">
                    {videoItems[activeIndex].title}
                </h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="mySwiper"
                >
                    {videoItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="video-container">
                                <video
                                    src={item.videoSrc}
                                    controls
                                    className="video-frame"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-next swiper-button-next-custom"></div>
                <div className="swiper-button-prev swiper-button-prev-custom"></div>
            </div>
            <Footer />
        </div>
    );
};

export default VideoEditingPage;
