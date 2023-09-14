import './Contact.css'
import AnimatedPages from "../AnimatedPages/AnimatedPages"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Separator from '../Separator/Separator';
const notify = () => toast.success('Mensaje Enviado');

const Contact = () => {
  const form = useRef();
const [send, setSend] = useState(false)


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_dup2qch', 'template_3r8mphk', form.current, 'VUn7__VIF9vDyQm8D')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setSend(true)
    notify()
};


  return (
    <AnimatedPages>
  <section id="contacto">
    <h2>Contacto</h2>
    <Separator />
    <span>{ send ? "¡Gracias por ponerte en contacto con nosotros!" : "¿Tenés algo para decir? Dejanos tu mensaje o consulta"}</span>

    {
      send ? <span className='send_msg'>Pronto alguien de nuestro Staff se pondra en contacto.</span> :  <form ref={form} onSubmit={sendEmail}>
      <div className="input-group">
        <label htmlFor="nombre">NOMBRE</label>
        <input type="text" name="user_name" id="nombre" required/>
      </div>
      <div className="input-group">
        <label htmlFor="mail">MAIL</label>
        <input type="mail" name="user_email" id="mail" required/>
      </div>
      <div className="input-group">
        <label htmlFor="mensaje">MENSAJE</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
      </div>
     <button type="submit" className='btn_contact'>ENVIAR</button>
    
    </form>
    }
    {send ? <Link to='/' className='btn_contact'>VOLVER AL HOME</Link> : ''}
    <Toaster />
    </section>
    </AnimatedPages>
   
  )
}

export default Contact