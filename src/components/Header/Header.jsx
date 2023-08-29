import { useRef, useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import logo from '../../assets/aTOJ 1.png'
import { Link } from "react-router-dom";
import "./style.css";



function Header() {
	const navRef = useRef();
	const [navBtnActive, setNavBtnActive] = useState(false);

	const links = document.querySelectorAll(".links");

	// MOSTRAR Y OCULTAR NAVBAR
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
		links.forEach(link => link.classList.toggle("links"));
		
		setNavBtnActive(prevState => !prevState)
	};
	const closeNavbar = () => {
		navRef.current.classList.remove(
			"responsive_nav"
			);
		links.forEach(link => link.classList.remove("active"));

			setNavBtnActive(false);
	}

	return (
		<header>
			<Link to={"/"} onClick={closeNavbar}  className="logo"><img src={logo} alt="atoj studio" /></Link>
			<nav ref={navRef}>
			<Link to={"/"}  className="active" onClick={closeNavbar}>Home</Link>
				<Link to={"/services"}  className="active" onClick={closeNavbar}>Servicios</Link>
				<Link to={"/contact"} className="active" onClick={closeNavbar}>Contacto</Link>
				<Link to={"/portfolio"} className="active" onClick={closeNavbar}>Portfolio</Link>
                <Link to={"/shop"} className="active last" onClick={closeNavbar}>Shop</Link>
			</nav>

			<button className='nav-btn' onClick={showNavbar} >		
				{
					navBtnActive ? <FaTimes /> : <FaBars />
				}
			</button>

			
		</header>
	);
}

export default Header;