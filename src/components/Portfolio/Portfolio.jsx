import AnimatedPages from "../AnimatedPages/AnimatedPages"
import Footer from '../Footer/Footer'
import './styles.css'
import img1 from '../../assets/image-1.webp'
import img2 from '../../assets/image 2.png'
import img3 from '../../assets/image 3.png'
import img4 from '../../assets/image 4.png'
import img5 from '../../assets/image 5.png'
import img6 from '../../assets/Rectangle 46 (1).png'
import img7 from '../../assets/Rectangle 46.png'
import Separator from "../Separator/Separator"


const Portfolio = () => {
  const proyectos = [
    {
      id: 1,
      title: "Clinica Dental Belladent",
      description: "Descripcion del proyecto 1",
      img: img1 ,
    },
    {
      id: 2,
      title: "Servicios Lira Soluciones",
      description: "Descripcion del proyecto 2",
      img: img7,
    },
    {
      id: 3,
      title: "Constructora Branch",
      description: "Descripcion del proyecto 3",
      img: img2,
    },
    {
      id: 4,
      title: "Consultora ambiental Esdras",
      description: "Descripcion del proyecto 4",
      img: img3,
    },
    {
      id: 5,
      title: "Repostería Artesanal Guelly",
      description: "Descripcion del proyecto 5",
      img: img4,
    },
    {
      id: 6,
      title: "Crafted - Impresión 3D",
      description: "Descripcion del proyecto 6",
      img: img6,
    },
    {
      id: 7,
      title: "Catalina Collection",
      description: "Descripcion del proyecto 7",
      img: img5,
    },
  
  ]
  return (
    <AnimatedPages>
      <section id='portfolio'>
        <div className="port-title"> 
        <h2>Portafolio</h2>
        <Separator />
        </div>

        <section className="trabajos">
          {proyectos.map(proyecto => (
            <article key={proyecto.id}>
              <img src={proyecto.img} alt={proyecto.title} />
              <h3>{proyecto.title}</h3>
            </article>
          ))}
        </section>
        <Footer/>
      </section>
    </AnimatedPages>
    
  )
}

export default Portfolio