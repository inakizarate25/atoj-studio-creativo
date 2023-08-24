import { useRef, useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import logo from '../../assets/LOGO ATOJ.png'
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
		links.forEach(link => link.classList.toggle("active"));
		
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
			
				<Link to={"/services"}   className="links" onClick={closeNavbar}>Servicios</Link>
				<Link to={"/contact"}  className="links" onClick={closeNavbar}>Contacto</Link>
				<Link to={"/portfolio"}  className="links" onClick={closeNavbar}>Portfolio</Link>
                <Link to={"/shop"}   className="links last" onClick={closeNavbar}>Shop</Link>
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