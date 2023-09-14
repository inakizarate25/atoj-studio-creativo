// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import './slide3.css';

// import required modules
import { Autoplay } from "swiper/modules";

const Slide3 = () => {

  return (
    <>
    <div className='slide-cont1'>
    <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper1"
      >
        <SwiperSlide className='swiper-slide1'>Compromiso</SwiperSlide>
        <SwiperSlide className='swiper-slide1'>Eficacia</SwiperSlide>
        <SwiperSlide className='swiper-slide1'>Puntualidad</SwiperSlide>
        <SwiperSlide className='swiper-slide1'>Creatividad</SwiperSlide>
      </Swiper>
    </div>   
    </>
  );
}
export default Slide3