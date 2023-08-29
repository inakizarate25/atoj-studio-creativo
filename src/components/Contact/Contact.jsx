import './Contact.css'
import AnimatedPages from "../AnimatedPages/AnimatedPages"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
const [send, setSend] = useState(false)

const handleClick = () => {
  setSend(true)
}
  return (
    <AnimatedPages>
 <section id="contacto">
    <h2>Contacto</h2>
    <div className="square"></div>
    <span>{ send ? "¡Gracias por ponerte en contacto con nosotros!" : "¿Tenés algo para decir? Dejanos tu mensaje o consulta"}</span>

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

export default Contact