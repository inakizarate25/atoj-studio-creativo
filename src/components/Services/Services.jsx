import './Services.css';
import Service from './Service';
import AnimatedPages from "../AnimatedPages/AnimatedPages";
import Separator from '../Separator/Separator';


const Services = () => {

  return (
    <AnimatedPages>
      <section id="services">
        <h1>Nuestros Servicios</h1>
        <Separator />
        <span className='serviceSubtitle'>Descubre nuestra gama de Servicios: Potenciando tu presencia con Diseño Gráfico y Web</span>
        <Service title={'DISEÑO DE IDENTIDAD VISUAL'} subtitle={'Subtítulo'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
        <Service title={'MARKETING DIGITAL'} subtitle={'Subtítulo'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
        <Service title={'DISEÑO GRÁFICO PARA REDES'} subtitle={'Subtítulo'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
        
      </section>
    </AnimatedPages>
   
  )
}

export default Services