import './Services.css';
import AnimatedPages from "../AnimatedPages/AnimatedPages";
import Separator from '../Separator/Separator';


const Services = () => {

  return (
    <AnimatedPages>
      <section id="services">
        <h2>Nuestros Servicios</h2>
        <Separator />
        <div className="serviceSubtitle">
        <p>Descubre nuestra gama de Servicios:</p>
        <p>Potenciando tu presencia con Diseño Gráfico y Web</p>
        </div>
        <div className="serviciosContenedor">
        <div className="service_Container">
            <h2 className="service_Title">DISEÑO DE LOGOTIPO</h2>
            <ul className="service_Content">
              <li className='listItem'>Diseño o rediseño de un logotipo a través del estudio de la personalidad de marca.</li>
              <li className='listItem'>Presentación de diferentes aplicaciones online/offline.</li>
              <li className='listItem'>Paleta de colores.</li>
              <li className='listItem'>Tipografía.</li> 
              <li className='listItem'>Manual de marca.</li> 
            </ul>
            <button className="service_Button">Contratar</button>
        </div>
        <div className="service_Container">
            <h2 className="service_Title">DISEÑO DE CONTENIDO</h2>
            <ul className="service_Content">
              <li className='listItem'>Diseño de contenido digital para redes sociales.</li>
              <li className='listItem'>Edición de video para reels/tik tok.</li>
              <li className='listItem'>Elaboración de contenido gráfico (posts, menús, catálogos) para campañas en redes sociales.</li>
              <li className='listItem'>Brochure y material para impresión.</li> 
            </ul>
            <button className="service_Button">Contratar</button>
        </div>
        <div className="service_Container">
            <h2 className="service_Title">GESTIÓN DE REDES</h2>
            <ul className="service_Content">
              <li className='listItem'>Análisis de mercado y competencia.</li>
              <li className='listItem'>Estudio de redes y definición de objetivos de campaña.</li>
              <li className='listItem'>Implementación de plan de contenido y programación.</li>
              <li className='listItem'>Informes de desempeño con seguimiento de KPI’s mensual.</li> 
            </ul>
            <button className="service_Button">Contratar</button>
        </div>
        </div>
      </section>
    </AnimatedPages>
   
  )
}

export default Services