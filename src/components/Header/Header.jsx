import { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import "./Header.css";
import en from '../../assets/en.png';
import es from '../../assets/es.png'
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext.jsx';

function Header() {
  const navRef = useRef();
  const [navBtnActive, setNavBtnActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");

  const links = document.querySelectorAll(".links");
  const language = useContext(langContext);


  // MOSTRAR Y OCULTAR NAVBAR
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    links.forEach((link) => link.classList.toggle("links"));

    setNavBtnActive((prevState) => !prevState);
  };
  function closeNavbar(id) {
    if (id === 'flag'){
      navRef.current.classList.remove("responsive_nav");
      setNavBtnActive(false);
      return;
    }
    navRef.current.classList.remove("responsive_nav");
    links.forEach((link) => link.classList.remove("active"));
    setNavBtnActive(false);
    setSelectedLink(id);
  }

  return (
    <header>
      <Link to={"/"} onClick={() => closeNavbar("home")} className="logo">
        <img src={logo} alt="atoj studio" />

      </Link>
      <nav ref={navRef}>
        <Link
          to={"/"}
          className={selectedLink === "home" ? "selected" : "active"}
          onClick={() => closeNavbar("home")}
        >
        <FormattedMessage id='nav.inicio' defaultMessage='Inicio'/>
        </Link>
        <Link
          to={"/services"}
          className={selectedLink === "services" ? "selected" : "active"}
          onClick={() => closeNavbar("services")}
        >
        <FormattedMessage id='nav.servicios' defaultMessage='Servicios'/>
        </Link>
        <Link
          to={"/contact"}
          className={selectedLink === "contact" ? "selected" : "active"}
          onClick={() => closeNavbar("contact")}
        >
        <FormattedMessage id='nav.contacto' defaultMessage='Contacto'/>
        </Link>
        <Link
          to={"/portfolio"}
          className={selectedLink === "portfolio" ? "selected" : "active"}
          onClick={() => closeNavbar("portfolio")}
        >
        <FormattedMessage id='nav.portafolio' defaultMessage='Portafolio'/>
        </Link>
        <Link
          to={"/shop"}
          className={selectedLink === "shop" ? "selected" : "active"}
          onClick={() => closeNavbar("shop")}
        >
        <FormattedMessage id='nav.shop' defaultMessage='Shop'/>
        </Link>
        <div>
          <button className='btn-flag' onClick={() => {closeNavbar('flag'); language.setLanguage('en-US');}}><img className='flag' src={en} alt='English Flag'/></button>
          <button className='btn-flag' onClick={() => {closeNavbar('flag'); language.setLanguage('es-ES');}}><img className='flag' src={es} alt='Spanish Flag'/></button>
        </div>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        {navBtnActive ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;
