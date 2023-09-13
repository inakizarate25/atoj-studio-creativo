import './Footer.css'
import face from '../../assets/Platform=Facebook, Color=Negative.svg'
import ig from '../../assets/Platform=Instagram, Color=Negative.svg'
import wpp from '../../assets/Platform=WhatsApp, Color=Negative.svg'
import tik from '../../assets/Platform=TikTok, Color=Negative.svg'
import email from '../../assets/Platform=Email, Color=Negative.svg'
const Footer = () => {

  
  return (
    <footer>
      <div className="redes">
        <a href="https://www.facebook.com/AtojStudioCreativo?locale=es_LA" target="_blank" rel="noopener noreferrer"><img src={face} alt="facebook" /></a>
        <a href="https://www.instagram.com/atojstudiocreativo/" target="_blank" rel="noopener noreferrer"><img src={ig} alt="instagram" /></a>
        <a href="mailto:atojstudiocreativo@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="email" /></a>
        <a href="https://www.tiktok.com/@atojstudiocreativo?_t=8dBuO8TZg6o&_r=1" target="_blank" rel="noopener noreferrer"><img src={tik} alt="tiktok" /></a>
        <a href="https://wa.link/i94i8a" target="_blank" rel="noopener noreferrer"><img src={wpp} alt="whatsapp" /></a>
      </div>
    </footer>
  );
}

export default Footer