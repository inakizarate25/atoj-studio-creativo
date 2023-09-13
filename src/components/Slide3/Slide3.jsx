// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide3.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Slide3 = () => {

  return (
    <>
    <div className='slide-cont palabras'>
    <Swiper 
        pagination={false}
        loop={false}
        navigation={false}
        modules={[ Pagination, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="swiper3"
      >
        <SwiperSlide className='item'>
        <p>Compromiso</p>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <p>Eficacia</p>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <p>Puntualidad</p>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <p>Creatividad</p>
        </SwiperSlide>
      </Swiper>
    </div>   
    </>
  );
}
export default Slide3