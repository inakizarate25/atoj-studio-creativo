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

import React, { useState, useEffect } from 'react';

const Slide2 = () => {

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
    <div className='slide-cont integrantes'>
{
  windowWidth <= 768 ?  <Swiper
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
</Swiper> :

<div className='int-res'>
  <div className='integrante1'>
    <img src={img1} />
  </div>
  <div className='integrante1'>
    <img src={img2} />
  </div>
  <div className='integrante1'>
    <img src={img3} />
  </div>
</div>
}

    </div>   
    </>
  );
}
export default Slide2