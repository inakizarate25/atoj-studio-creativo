import './styles.css'
import Porcentaje from '../porcentaje/Porcentaje'

import React, { useEffect, useRef, useState } from 'react';


const Wave = () => {

  const elementRefs = useRef([]);

  // Un array para rastrear la visibilidad de cada elemento individual
  const [isVisible, setIsVisible] = useState(Array(3).fill(false));

  const handleScroll = () => {
    elementRefs.current.forEach((elementRef, index) => {
      if (elementRef) {
        const elementTop = elementRef.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          setIsVisible((prev) => {
            const updatedVisibility = [...prev];
            updatedVisibility[index] = true;
            return updatedVisibility;
          });
        } else {
          setIsVisible((prev) => {
            const updatedVisibility = [...prev];
            updatedVisibility[index] = false;
            return updatedVisibility;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='circleContainer'>
      <div className="individualCircle">
        <div className='circle'>
          <div className='wave'>
            <div className={`child1 ${isVisible[0] ? 'wave-animation' : ''}`} ref={(el) => (elementRefs.current[0] = el)}></div>
            <div className={`child2 ${isVisible[0] ? 'wave-animation' : ''}`} ref={(el) => (elementRefs.current[0] = el)}></div>
          </div>
        </div>
        <Porcentaje porcentaje={100} titulo={'Clientes Felices'}/>
      </div>
      <div className="individualCircle">
        <div className='circle' >
        <div className='wave'>
            <div className={`child1 ${isVisible[1] ? 'wave-animation' : ''}`} ref={(el) => (elementRefs.current[1] = el)}></div>
            <div className={`child2 ${isVisible[1] ? 'wave-animation' : ''}`} ref={(el) => (elementRefs.current[1] = el)}></div>
          </div>
        </div>
        <Porcentaje porcentaje={100} titulo={'Marcas Mejoradas'}/>
      </div>

{/* 75 */}
      <div className="individualCircle">
        <div className='circle' >
        <div className='wave wave2'>
            <div className={`child3 ${isVisible[2] ? 'wave2-animation' : ''}`} ref={(el) => (elementRefs.current[2] = el)}></div>
            <div className={`child4 ${isVisible[2] ? 'wave2-animation' : ''}`} ref={(el) => (elementRefs.current[2] = el)}></div>
          </div>
        </div>
        <Porcentaje porcentaje={75} titulo={'Tiempo Sin Dormir'}/>
      </div>
      
    </div>
  );
}

export default Wave