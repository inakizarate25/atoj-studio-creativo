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


import React, { useState, useEffect } from 'react';
const Slide = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Función para actualizar el estado con el ancho actual del dispositivo
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    // Agrega un evento de escucha para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleWindowResize);

    // Limpia el evento de escucha cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <>
    <div className='slide-cont'>
    <h2>Portafolio</h2>

    {
  windowWidth <= 768 ?   <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 10,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
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
    <img src={img1} loading='lazy'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src={img2} loading='lazy'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src={img3} loading='lazy'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src={img4} loading='lazy'/>
  </SwiperSlide>
</Swiper> :

<div className='port-res'>
  <div className='port2'>
    <img src={img1} loading='lazy'/>
  </div>
  <div className='port2'>
    <img src={img2} loading='lazy'/>
  </div>
  <div className='port2'>
    <img src={img3} loading='lazy'/>
  </div>
  <div className='port2'>
    <img src={img4} loading='lazy'/>
  </div>
</div>
}



     
    </div>
   
    </>
  );
}
export default Slide