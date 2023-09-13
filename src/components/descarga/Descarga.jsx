import "./styles.css";
import AnimatedPages from "../AnimatedPages/AnimatedPages";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from "react-router-dom";
import Separator from "../Separator/Separator";

const notify = () => toast.success('Email agregado correctamente');
const Descarga = ({ products }) => {
  const [send, setSend] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errores, setErrores] = useState({});
  const form = useRef();

  const handleClick = (event) => {
    event.preventDefault();

    // Realiza la validación
    const newErrores = {};
    if (!nombre.trim()) {
      newErrores.nombre = "El nombre es requerido";
    }
    if (!email.trim()) {
      newErrores.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrores.email = "Ingrese un email válido";
    }

    // Si hay errores, no continúes
    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    setErrores({});
    

    // email.js
    const sendEmail = () => {
      emailjs.sendForm('service_l7hsfo4', 'template_d3sm26w', form.current, 'VUn7__VIF9vDyQm8D')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    sendEmail();


    setSend(true);
    notify();
  };


  // RUTAS AL LINK
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <AnimatedPages>
      <section id="descarga-sec">
        <h2>{send ? "¡Felicidades!" : "¡Ya casi es tuyo!"}</h2>
        <Separator />
        <span>
          {send ? (
            <div key={product.id} className="msg-desc">
              <span>¡Que disfrutes tu regalo!</span>
              <p>
                A través de este <a href={product.link}>LINK</a> podrás obtener
                tu descargable gratuito
              </p>

              <Link className="btn_contact back-home" to="/">
                VOLVER AL HOME
              </Link>
            </div>
          ) : (
            ""
          )}
        </span>

        {send ? (
          ""
        ) : (
          <form ref={form}>
            <div className="input-group">
              <label htmlFor="nombre">NOMBRE</label>
              <input
                type="text"
                name="user_name"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.nombre && <p className="error-msg">{errores.nombre}</p>}
            </div>
            <div className="input-group">
              <label htmlFor="mail">MAIL</label>
              <input
                type="email"
                name="user_email"
                id="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              {errores.email && <p className="error-msg">{errores.email}</p>}
            </div>
            <input
              type="submit"
              className="btn_contact"
              value={"CONTINUAR LA COMPRA"}
              onClick={handleClick}
            />
          </form>
        )}
           <Toaster />
      </section>
    </AnimatedPages>
  );
};

export default Descarga;
