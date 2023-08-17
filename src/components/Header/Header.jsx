import { useRef, useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import logo from '../../assets/LOGO ATOJ.png'
import "./style.css";



function Header() {
	const navRef = useRef();
	const [navBtnActive, setNavBtnActive] = useState(false);


	// MOSTRAR Y OCULTAR NAVBAR
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
		setNavBtnActive(prevState => !prevState)
	};
	const closeNavbar = () => {
		navRef.current.classList.remove(
			"responsive_nav"
			);
			setNavBtnActive(false);
	}

	return (
		<header>
			<a href="#inicio"  className="logo"><img src={logo} alt="atoj studio" /></a>
			<nav ref={navRef}>
			
				<a href="#home" className="links" onClick={closeNavbar}>Home</a>
				<a href="#about" className="links" onClick={closeNavbar}>About</a>
				<a href="#servicios" className="links" onClick={closeNavbar}>Services</a>
				<a href="#portfolio" className="links" onClick={closeNavbar}>Portfolio</a>
                <a href="#contacto"  className="links" onClick={closeNavbar}>Contact</a>
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