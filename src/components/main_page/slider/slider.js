import React from 'react';
import './slider.css'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import {Navigation} from "swiper";
import 'swiper/css/navigation';


const NavLink = () => {

    return (
        <div className='swiper-card'>
            <a href='/prod-info/'><img className='sw-card-img' src={require('./slider-img/kepka1.png')}
                 alt=""/></a>
            <div className="card-body">
                <div className='kepka-brand'>Adidas</div>
                <div className='kepka-model'>San Francisco Baseball</div>
                <div className="kepka-price">3800c</div>
            </div>
        </div>
        
    )
}

const Slider = () => {
    return (
            <div className="swiper-inner main-container">
                <i className='arrow-left fa-solid fa-angle-left' alt="arrow-left"></i>
                <Swiper
                    modules={[Navigation]}
                    className='swiper'
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.arrow-left',
                        nextEl: '.arrow-right'
                    }}
                >
                    <SwiperSlide className='swiper-slide'>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                    <SwiperSlide>{NavLink}</SwiperSlide>
                </Swiper>
                <i className='arrow-right fa-solid fa-angle-left' alt="arrow-right"/>
            </div>
        
    );
};


export default Slider
