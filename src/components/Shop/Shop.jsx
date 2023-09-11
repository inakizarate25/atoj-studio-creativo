import AnimatedPages from "../AnimatedPages/AnimatedPages"
import fondo from '../../assets/fondo.svg'
import './styles.css'
import { Link } from "react-router-dom"
import img1 from '../../assets/Vector 3.svg'
import descargables from "../../data"

const Shop = () => {
 
  return (
    <AnimatedPages>
   <section id='shop'>
   <div className="shop-title"> 
        <h2>Shop</h2>
        <div className="square"><img src={img1} alt="" /></div>
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