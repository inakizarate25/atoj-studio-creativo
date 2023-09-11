import './styles.css'
import AnimatedPages from "../AnimatedPages/AnimatedPages"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/Captura de Pantalla 2023-09-04 a la(s) 20.58 2.png'

const Descarga = () => {


  const [send, setSend] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errores, setErrores] = useState({});

  const handleClick = (event) => {
    event.preventDefault();

    // Realiza la validación
    const newErrores = {};
    if (!nombre.trim()) {
      newErrores.nombre = 'El nombre es requerido';
    }
    if (!email.trim()) {
      newErrores.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrores.email = 'Ingrese un email válido';
    }

    // Si hay errores, no continúes
    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    setErrores({});
    setSend(true);
  };


  return (
    <AnimatedPages>
 <section id="descarga-sec">
    <h2>{send ? '¡Felicidades!' : '¡Ya casi es tuyo!'}</h2>
    <div className="square"><img src={img1} alt="" /></div>
    <span>{ send ? <div className='msg-desc'>
        <span>¡Que disfrutes tu regalo!</span>
        <p>A través de este <a>LINK</a> podrás obtener tu descargable gratuito</p>
        <Link className='btn_contact back-home'  to="/">VOLVER AL HOME</Link>
    </div> : ""}</span>

    {
      send ? '' :  
      <form>
              <div className="input-group">
                <label htmlFor="nombre">NOMBRE</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                {errores.nombre && <p className="error-msg">{errores.nombre}</p>}
              </div>
              <div className="input-group">
                <label htmlFor="mail">MAIL</label>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errores.email && <p className="error-msg">{errores.email}</p>}
              </div>
              <input type="submit" className='btn_contact' value={"CONTINUAR LA COMPRA"} onClick={handleClick} />

            </form>
    }
 
    </section>
    </AnimatedPages>
   
  )
}

export default Descarga