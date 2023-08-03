import { useRef } from "react";
import { FaBars, FaTimes,FaInstagram, FaTiktok } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
			<Link to={`/`} className="logo">LOGO</Link>
			<nav ref={navRef}>
				<div className="div-links">
				<NavLink to={"/"} className="links" href="#inicio" onClick={closeNavbar}>HOME</NavLink>
				<NavLink to={"/about"}className="links" href="#planes" onClick={closeNavbar}>ABOUT</NavLink>
				<NavLink to={"/servicios"} className="links" href="#blogs" onClick={closeNavbar}>SERVICES</NavLink>
                <NavLink to={"/contacto"}className="links"href="#blogs" onClick={closeNavbar}>CONTACT</NavLink>
				</div>
				
			  
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>


				<div className="redes">
				<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, necessitatibus.</span>
				<div className="div-redes">
					<a href={ig}><FaInstagram/></a>
					<a href={tik}><FaTiktok/></a>
				</div>
			</div>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

			
		</header>
	);
}

export default Header;