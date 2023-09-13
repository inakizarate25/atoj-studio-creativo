import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './styles.css'
import { Link, useParams } from "react-router-dom"
import img1 from '../../assets/Vector 3.svg'
import descargables, { getDescById } from "../../data"
import { useEffect, useState } from "react"
import Separator from "../Separator/Separator"


// item
// const Item = ({id, title, img, gratis}) => {
//   return (
//     <article className="descargable" key={id}>
//         <img src={img} alt={title}/>
//         <h3>{title}</h3>
//         {
//           gratis ? <Link to={`/descarga/${id}`} className="descargar">Descargar</Link> : <Link to='/compra' className="descargar">Comprar</Link>
//         }
//     </article>
//   )
 
// }


// itemdetail
const Shop = () => {

 
  return (
    <AnimatedPages>
   <section id='shop'>
   <div className="shop-title"> 
        <h2>Shop</h2>
        <Separator />
        </div>

        <section className="descargables_list">
        {descargables.map((descargable) => (
           <article className="descargable" key={descargable.id}>
           <img src={descargable.img} alt={descargable.title}/>
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