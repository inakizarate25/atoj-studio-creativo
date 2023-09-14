import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './Home.css'

import ServiceLink from "./serviceLink";
import Objetives from "../Objetives/objetives";
import Slide from "../Slide/Slide";
import Slide2 from "../Slide2/Slide2";
import { BsDot } from "react-icons/bs";
import lapiz from '../../assets/lapiz.png';
import idea from '../../assets/idea.png';
import like from '../../assets/like.png';
import Slide3 from "../Slide3/Slide3";

import B1 from '../../assets/b1.png'
import B2 from '../../assets/b2.png'
import B3 from '../../assets/b3.png'
import B4 from '../../assets/b4.png'
import B5 from '../../assets/b5.png'
import B6 from '../../assets/b6.png'



const Home = () => {


  return (
    <AnimatedPages>
      <section id="home">
        <div className="presentacion">
          <Slide3 />
        </div>
        <div className="mvcontenedor">
          <div className="mcontenedor">
            <p className="misionValor">Nuestra Misión</p>
            <div className="marco">
              <p className="bordearriba">&lt;  &lt;  <BsDot />  &gt;  &gt;</p>
              <p className="contenido">Logramos el éxito de clientes con soluciones integrales de marketing digital y diseño vanguardista. Fusionamos estética visual y tácticas efectivas, reflejando respeto por cada cliente y buscando su prosperidad en el mundo digital.</p>
              <p className="bordeabajo">&lt;  &lt;  <BsDot />  &gt;  &gt;</p>        
            </div>
          </div>
          <div className="mcontenedor">
            <p className="misionValor">Nuestra Visión</p>
            <div className="marco">
              <p className="bordearriba">&lt;  &lt;  <BsDot />  &gt;  &gt;</p>
              <p className="contenido">Líderes en Marketing Digital, fusionamos diseño y estrategia de manera innovadora. Creando marcas y campañas atractivas, impulsamos el crecimiento de los clientes con soluciones estratégicas que reflejan su identidad.</p>
              <p className="bordeabajo">&lt;  &lt;  <BsDot />  &gt;  &gt;</p>        
            </div>
          </div>
        </div>
          <Slide2 />
          <Slide/>   
          <Objetives />
          <div className="serviciosContenedor">
            <ServiceLink icon={lapiz} content={'Diseño de Logotipo'} url={'/services'} />
            <ServiceLink icon={idea} content={'Diseño de Contenido'} url={'/services'} />
            <ServiceLink icon={like} content={'Gestión de redes'} url={'/services'} />
          </div>
          <div className="cartel">
            <span>
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
              Creamos marcas que inspiren en varios paises 
              <img className="bandera primera" src={B1} alt="B1" /> 
              <img className="bandera" src={B2} alt="B2" /> 
              <img className="bandera" src={B3} alt="B3" /> 
              <img className="bandera" src={B4} alt="B4" /> 
              <img className="bandera" src={B5} alt="B5" /> 
              <img className="bandera" src={B6} alt="B6" /> 
            </span>
          </div>
      </section>
    </AnimatedPages>
   
  )
}

export default Home