import './Services.css'
import AnimatedPages from "../AnimatedPages/AnimatedPages"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
const [send, setSend] = useState(false)

const handleClick = () => {
  setSend(true)
}
  return (
    <AnimatedPages>
 <section id="contacto">
    <h1>Nuestros Servicios</h1>
    <div><div className="squareS"></div></div>
    <span>{ send ? "¡Gracias por ponerte en contacto con nosotros!" : "Descubre nuestra gama de servicios: Potenciando tu presencia con Diseño Gráfico y Web"}</span>

    {
      send ? <span className='send_msg'>Pronto alguien de nuestro Staff se pondra en contacto.</span> :  <form>
      <div className="input-group">
        <label htmlFor="nombre">NOMBRE</label>
        <input type="text" name="nombre" id="nombre" />
      </div>
      <div className="input-group">
        <label htmlFor="mail">MAIL</label>
        <input type="mail" name="mail" id="mail" />
      </div>
      <div className="input-group">
        <label htmlFor="mensaje">MENSAJE</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
      </div>
    </form>
    }
    {
      send ? <Link to='/' className='btn_contact'>VOLVER AL HOME</Link> : <button type="submit" className='btn_contact' onClick={handleClick}>ENVIAR</button>
    }
    </section>
    </AnimatedPages>
   
  )
}

export default Services