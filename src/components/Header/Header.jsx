import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const navRef = useRef();
  const [navBtnActive, setNavBtnActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");

  const links = document.querySelectorAll(".links");

  // MOSTRAR Y OCULTAR NAVBAR
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    links.forEach((link) => link.classList.toggle("links"));

    setNavBtnActive((prevState) => !prevState);
  };
  function closeNavbar(id) {
    navRef.current.classList.remove("responsive_nav");
    links.forEach((link) => link.classList.remove("active"));

    setNavBtnActive(false);
    setSelectedLink(id);
  }

  return (
    <header>
      <Link to={"/"} onClick={closeNavbar} className="logo">
        <img src={logo} alt="atoj studio" />
      </Link>
      <nav ref={navRef}>
        <Link
          to={"/"}
          className={selectedLink === "home" ? "selected" : "active"}
          onClick={() => closeNavbar("home")}
        >
          Home
        </Link>
        <Link
          to={"/services"}
          className={selectedLink === "services" ? "selected" : "active"}
          onClick={() => closeNavbar("services")}
        >
          Servicios
        </Link>
        <Link
          to={"/contact"}
          className={selectedLink === "contact" ? "selected" : "active"}
          onClick={() => closeNavbar("contact")}
        >
          Contacto
        </Link>
        <Link
          to={"/portfolio"}
          className={selectedLink === "portfolio" ? "selected" : "active"}
          onClick={() => closeNavbar("portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to={"/shop"}
          className={selectedLink === "shop" ? "selected" : "active last"}
          onClick={() => closeNavbar("shop")}
        >
          Shop
        </Link>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        {navBtnActive ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;
