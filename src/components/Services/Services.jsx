import './Services.css';
import AnimatedPages from "../AnimatedPages/AnimatedPages";
import Separator from '../Separator/Separator';
import { FormattedMessage } from 'react-intl';


const Services = () => {

  return (
    <AnimatedPages>
      <section id="services">
        <h2><FormattedMessage id='services.titulo' defaultMessage='Nuestros Servicios'/></h2>
        <Separator />
        <div className="serviceSubtitle">
        <p><FormattedMessage id='services.subtitle1' defaultMessage= 'Descubre nuestra gama de Servicios:'/></p>
        <p><FormattedMessage id='services.subtitle2' defaultMessage= 'Potenciando tu presencia con Diseño Gráfico y Web'/></p>
        </div>
        <div className="serviciosContenedor">
        <div className="service_Container">
            <h2 className="service_Title"><FormattedMessage id='services.logotipo' defaultMessage= 'DISEÑO DE LOGOTIPO'/></h2>
            <ul className="service_Content">
              <li className='listItem'><FormattedMessage id='services.logotipo.1' defaultMessage= 'Diseño o rediseño de un logotipo a través del estudio de la personalidad de marca.'/></li>
              <li className='listItem'><FormattedMessage id='services.logotipo.2' defaultMessage= 'Presentación de diferentes aplicaciones online/offline.'/></li>
              <li className='listItem'><FormattedMessage id='services.logotipo.3' defaultMessage= 'Paleta de colores.'/></li>
              <li className='listItem'><FormattedMessage id='services.logotipo.4' defaultMessage= 'Tipografía.'/></li> 
              <li className='listItem'><FormattedMessage id='services.logotipo.5' defaultMessage= 'Manual de marca.'/></li> 
            </ul>
            <a className="service_Button" href="https://wa.link/qx3p5u" target="_blank" rel="noopener noreferrer"><FormattedMessage id='services.link' defaultMessage= 'Contratar'/></a>
        </div>
        <div className="service_Container">
            <h2 className="service_Title"><FormattedMessage id='services.contenido' defaultMessage= 'DISEÑO DE CONTENIDO'/></h2>
            <ul className="service_Content">
              <li className='listItem'><FormattedMessage id='services.contenido.1' defaultMessage= 'Diseño de contenido digital para redes sociales.'/></li>
              <li className='listItem'><FormattedMessage id='services.contenido.2' defaultMessage= 'Edición de video para reels/tik tok.'/></li>
              <li className='listItem'><FormattedMessage id='services.contenido.3' defaultMessage= 'Elaboración de contenido gráfico (posts, menús, catálogos) para campañas en redes sociales.'/></li>
              <li className='listItem'><FormattedMessage id='services.contenido.4' defaultMessage= 'Brochure y material para impresión.'/></li> 
            </ul>
            <a className="service_Button" href="https://wa.link/smq5vd" target="_blank" rel="noopener noreferrer"><FormattedMessage id='services.link' defaultMessage= 'Contratar'/></a>
        </div>
        <div className="service_Container">
            <h2 className="service_Title"><FormattedMessage id='services.redes' defaultMessage= 'GESTIÓN DE REDES'/></h2>
            <ul className="service_Content">
              <li className='listItem'><FormattedMessage id='services.redes.1' defaultMessage= 'Análisis de mercado y competencia.'/></li>
              <li className='listItem'><FormattedMessage id='services.redes.2' defaultMessage= 'Estudio de redes y definición de objetivos de campaña.'/></li>
              <li className='listItem'><FormattedMessage id='services.redes.3' defaultMessage= 'Implementación de plan de contenido y programación.'/></li>
              <li className='listItem'><FormattedMessage id='services.redes.4' defaultMessage= 'Informes de desempeño con seguimiento de KPI’s mensual.'/></li> 
            </ul>
            <a className="service_Button" href="https://wa.link/zlbc9z" target="_blank" rel="noopener noreferrer"><FormattedMessage id='services.link' defaultMessage= 'Contratar'/></a>
        </div>
        </div>
      </section>
    </AnimatedPages>
   
  )
}

export default Services