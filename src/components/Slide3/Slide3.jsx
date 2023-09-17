// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FormattedMessage } from 'react-intl';
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
        <SwiperSlide className='swiper-slide1'><FormattedMessage id='home.jumbotron.uno' defaultMessage='Compromiso'/></SwiperSlide>
        <SwiperSlide className='swiper-slide1'><FormattedMessage id='home.jumbotron.dos' defaultMessage='Eficacia'/></SwiperSlide>
        <SwiperSlide className='swiper-slide1'><FormattedMessage id='home.jumbotron.tres' defaultMessage='Puntualidad'/></SwiperSlide>
        <SwiperSlide className='swiper-slide1'><FormattedMessage id='home.jumbotron.cuatro' defaultMessage='Creatividad'/></SwiperSlide>
      </Swiper>
    </div>   
    </>
  );
}
export default Slide3