import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
      
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
      <div>
      <div>
      <img className='w-[100%] h-[500px]' src='/images/section1.png'/>
    </div>
    <div className='h-[15vh] flex justify-end items-end' style={{backgroundImage:"url(/images/section12.png)" ,backgroundSize:"100% 100%"}}>
      <img className='w-[100%] h-[4%]' src='/images/wave.png'/>
    </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
      <div>
      <div>
      <img className='w-[100%] h-[500px]' src='/images/section1.png'/>
    </div>
    <div className='h-[15vh] flex justify-end items-end' style={{backgroundImage:"url(/images/section12.png)" ,backgroundSize:"100% 100%"}}>
      <img className='w-[100%] h-[13vh]' src='/images/wave.png'/>
    </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
      <div>
      <div>
      <img className='w-[100%] h-[500px]' src='/images/section1.png'/>
    </div>
    <div className='h-[15vh] flex justify-end items-end' style={{backgroundImage:"url(/images/section12.png)" ,backgroundSize:"100% 100%"}}>
      <img className='w-[100%] h-[13vh]' src='/images/wave.png'/>
    </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
