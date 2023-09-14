import './styles.css'
import Porcentaje from '../porcentaje/Porcentaje'

const Wave = () => {
  const arrayNumeros = [];
  for (let i = 0; i <= 100; i += 10) {
    arrayNumeros.push(i);
  }


  return (
    <>
      <div className="circle">
        <div className="wave"></div>
      </div>
     <Porcentaje porcentaje={100} titulo={'Clientes Felices'}/>
      <div className="circle">
        <div className="wave"></div>
      </div>
     <Porcentaje porcentaje={100} titulo={'Marcas Mejoradas'}/>
      <div className="circle circle2">
        <div className="wave wave2"></div>
      </div>
     <Porcentaje porcentaje={75} titulo={'Tiempo Sin Dormir'}/>
    </>
  )
}

export default Wave