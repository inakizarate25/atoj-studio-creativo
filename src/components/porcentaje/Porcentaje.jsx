import { useState, useEffect } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Porcentaje = ({ porcentaje, titulo }) => {
  const [valorActual, setValorActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valorActual < porcentaje) {
        setValorActual(valorActual + 1);
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, [porcentaje, valorActual]);

  return (
    <div className='porcentaje'>
      <h4>{titulo}</h4>
      <span>{valorActual}%</span>
    </div>
  );
};

Porcentaje.propTypes = {
  porcentaje: PropTypes.number.isRequired, // Cambia el tipo si es necesario
  titulo: PropTypes.string.isRequired,
};

export default Porcentaje;
