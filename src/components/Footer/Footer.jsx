import './Footer.css'
import face from '../../assets/Platform=Facebook, Color=Negative.svg'
import x from '../../assets/Platform=X (Twitter), Color=Negative.svg'
import ig from '../../assets/Platform=Instagram, Color=Negative.svg'
import wpp from '../../assets/Platform=WhatsApp, Color=Negative.svg'
import li from '../../assets/Platform=LinkedIn, Color=Negative.svg'
import tik from '../../assets/Platform=TikTok, Color=Negative.svg'
const Footer = () => {

  let date = new Date();
  
  return (
    <footer>
      <div className="redes">
        <a href=""><img src={face} alt="facebook" /></a>
        <a href=""><img src={x} alt="X" /></a>
        <a href=""><img src={ig} alt="instagram" /></a>
        <a href=""><img src={wpp} alt="whatsapp" /></a>
        <a href=""><img src={li} alt="linkedin" /></a>
        <a href=""><img src={tik} alt="tiktok" /></a>
      </div>
<<<<<<<<< Temporary merge branch 1
      <h2>&copy; 2023</h2>
=========
      <h2>&copy; {date.getFullYear()}</h2>
>>>>>>>>> Temporary merge branch 2
    </footer>
  );
}

export default Footer