// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide2.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../assets/cd3.jpg'
import img2 from '../../assets/cm1.jpg'
import img3 from '../../assets/gd3.jpg'


const Slide2 = () => {

  return (
    <>
    <div className='slide-cont integrantes'>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper swiper2"
      >
        <SwiperSlide className='integrante'>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className='integrante'>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className='integrante'>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
    </div>   
    </>
  );
}
export default Slide2