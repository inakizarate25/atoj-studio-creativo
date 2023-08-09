import { useEffect, useRef } from "react";
import { FaBars, FaTimes,FaInstagram, FaTiktok } from "react-icons/fa";

import "./style.css";

const ig = "https://www.instagram.com/atojstudiocreativo/"
const tik = "https://www.tiktok.com/@atojstudiocreativo?_t=8dBuO8TZg6o&_r=1"

function Header() {
	const navRef = useRef();


	// MOSTRAR Y OCULTAR NAVBAR
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const closeNavbar = () => {
		navRef.current.classList.remove(
			"responsive_nav"
			);
	}

	return (
		<header>
			<a href="#inicio"  className="logo">LOGO</a>
			<nav ref={navRef}>
			
				<a href="#home" className="links" onClick={closeNavbar}>HOME</a>
				<a href="#about" className="links" onClick={closeNavbar}>ABOUT</a>
				<a href="#servicios" className="links" onClick={closeNavbar}>SERVICES</a>
                <a href="#contacto"  className="links" onClick={closeNavbar}>CONTACT</a>

{/* 				
			  
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
</button> */}

			
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar} >
				<FaBars />
			</button>

			
		</header>
	);
}

export default Header;