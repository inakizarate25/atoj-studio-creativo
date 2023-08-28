import './styles.css'
import AnimatedPages from "../AnimatedPages/AnimatedPages"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Descarga = () => {
const [send, setSend] = useState(false)

const handleClick = () => {
  setSend(true)
}
  return (
    <AnimatedPages>
 <section id="descarga-sec">
    <h2>{send ? '¡Felicidades!' : '¡Ya casi es tuyo!'}</h2>
    <div className="square"></div>
    <span>{ send ? <div className='msg-desc'>
        <span>¡Que disfrutes tu regalo!</span>
        <p>A través de este <a>LINK</a> podrás obtener tu descargable gratuito</p>
    </div> : ""}</span>

    {
      send ? '' :  <form>
      <div className="input-group">
        <label htmlFor="nombre">NOMBRE</label>
        <input type="text" name="nombre" id="nombre" required/>
      </div>
      <div className="input-group">
        <label htmlFor="mail">MAIL</label>
        <input type="mail" name="mail" id="mail" required/>
      </div>
    </form>
    }
    {
      send ? <Link to='/' className='btn_contact btn-desc'>VOLVER AL HOME</Link> : <button type="submit" className='btn_contact' onClick={handleClick}>DESCARGA GRATUITA</button>
    }
    </section>
    </AnimatedPages>
   
  )
}

export default Descarga