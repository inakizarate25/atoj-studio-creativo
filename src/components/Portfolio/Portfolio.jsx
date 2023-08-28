import AnimatedPages from "../AnimatedPages/AnimatedPages"
import Footer from '../Footer/Footer'
import './styles.css'

const Portfolio = () => {
  const proyectos = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripcion del proyecto 1",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripcion del proyecto 2",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripcion del proyecto 3",
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Descripcion del proyecto 4",
    },
    {
      id: 5,
      title: "Proyecto 5",
      description: "Descripcion del proyecto 5",
    },
    {
      id: 6,
      title: "Proyecto 6",
      description: "Descripcion del proyecto 6",
    },
    {
      id: 7,
      title: "Proyecto 7",
      description: "Descripcion del proyecto 7",
    },
    {
      id: 8,
      title: "Proyecto 8",
      description: "Descripcion del proyecto 8",
    },
    {
      id: 9,
      title: "Proyecto 9",
      description: "Descripcion del proyecto 9",
    },
  ]
  return (
    <AnimatedPages>
      <section id='portfolio'>
        <div className="port-title"> 
        <h2>Portafolio</h2>
        <div className="square"></div>
        </div>

        <section className="trabajos">
          {proyectos.map(proyecto => (
            <article key={proyecto.id}>
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