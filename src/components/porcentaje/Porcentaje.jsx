import { useState, useEffect, useRef } from 'react';
import './styles.css';

const Porcentaje = ({ porcentaje, titulo }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const porcentajeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = porcentajeRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

      if (isVisible && currentValue < porcentaje) {
        const duration = 7000;
        const steps = porcentaje - currentValue;
        const stepInterval = duration / steps;

        const interval = setInterval(() => {
          setCurrentValue((prevValue) =>
            prevValue + 1 > porcentaje ? porcentaje : prevValue + 1
          );

          if (currentValue >= porcentaje) {
            clearInterval(interval);
          }
        }, stepInterval);

        return () => {
          clearInterval(interval);
        };
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [porcentaje, currentValue]);

  return (
    <div className='porcentaje' ref={porcentajeRef}>
      <h4>{titulo}</h4>
      <span>{currentValue}%</span>
    </div>
  );
};

export default Porcentaje;
