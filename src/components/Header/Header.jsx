import { useRef } from "react";
import { FaBars, FaTimes,FaInstagram, FaTiktok } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Header() {


	
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    let link = document.querySelector(".link");
    let link1 = document.querySelector(".link1");
    let link2 = document.querySelector(".link2");
    let link3 = document.querySelector(".link3");

    link.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link1.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link2.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link3.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })

    
	};

	return (
		<header>
			<Link to={`/`} className="logo">LOGO</Link>
			<nav ref={navRef}>
				<div className="div-links">
				<NavLink to={"/"} className="link links" href="#inicio">HOME</NavLink>
				<NavLink to={"/about"}className="link1 links" href="#planes">ABOUT</NavLink>
				<NavLink to={"/servicios"} className="link2 links" href="#blogs">SERVICES</NavLink>
                <NavLink to={"/contacto"}className="link3 links"href="#blogs">CONTACT</NavLink>
				</div>
				
			  
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>


				<div className="redes">
				<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, necessitatibus.</span>
				<div className="div-redes">
					<a href="https://www.instagram.com/atojstudiocreativo/"><FaInstagram/></a>
					<a href="https://www.tiktok.com/@atojstudiocreativo?_t=8dBuO8TZg6o&_r=1"><FaTiktok/></a>
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