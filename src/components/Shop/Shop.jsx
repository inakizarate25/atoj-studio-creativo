import AnimatedPages from "../AnimatedPages/AnimatedPages"
import fondo from '../../assets/fondo.svg'
import './styles.css'
import { Link } from "react-router-dom"

const Shop = () => {
  const descargables = [
    {
      id: 1,
      title: "Descargable 1",
      description: "Descripcion del descargable 1",
      img: fondo,
      gratis:false,
    },
    {
      id: 2,
      title: "Descargable 2",
      description: "Descripcion del descargable 2",
      img: fondo,
      gratis:false,
    },
    {
      id: 3,
      title: "Descargable 3",
      description: "Descripcion del descargable 3",
      img: fondo,
      gratis:true,
    },
    {
      id: 4,
      title: "Descargable 5",
      description: "Descripcion del descargable 5",
      img: fondo,
      gratis:false,
    },
    {
      id: 5,
      title: "Descargable 4",
      description: "Descripcion del descargable 4",
      img: fondo,
      gratis:true,
    },
    {
      id: 6,
      title: "Descargable 6",
      description: "Descripcion del descargable 6",
      img: fondo,
      gratis:false,
    },

  ]
  return (
    <AnimatedPages>
   <section id='shop'>
   <div className="shop-title"> 
        <h2>Shop</h2>
        <div className="square"></div>
        </div>

        <section className="descargables_list">
           {descargables.map((descargable) => (
             <article className="descargable" key={descargable.id}>
               <img src={descargable.img} alt={descargable.title}/>
               <h3>{descargable.title}</h3>
              {
                descargable.gratis ? <Link to='/descarga' className="descargar">Descargar</Link> : <Link to='/compra' className="descargar">Comprar</Link>
              }
             </article>
           ))}
        </section>
    </section>
    </AnimatedPages>
  
  )
}

export default Shop