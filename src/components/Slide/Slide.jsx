// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'

const Slide = () => {
  return (
    <>
    <div className='slide-cont'>
    <h2>Portfolio</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
      </Swiper>
    </div>
   
    </>
  );
}
export default Slide