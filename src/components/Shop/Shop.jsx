import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './styles.css'
import { Link} from "react-router-dom"
import descargables, { getDescById } from "../../data"
import Separator from "../Separator/Separator"



// itemdetail
const Shop = () => {

 
  return (
    <AnimatedPages>
   <section id='shop'>
        <h2>Shop</h2>
        <Separator />
       

        <section className="descargables_list">
        {descargables.map((descargable) => (
           <article className="descargable" key={descargable.id}>
           <img src={descargable.img} alt={descargable.title} loading="lazy"/>
           <h3>{descargable.title}</h3>
           {
            descargable.gratis ? <Link to={`/descargable/${descargable.id}`} className="descargar">Descargar</Link> : <Link to='/compra' className="descargar">Comprar</Link>
           }
       </article>
           ))}
        </section>
    </section>
    </AnimatedPages>
  
  )
}

export default Shop