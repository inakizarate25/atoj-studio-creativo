import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './styles.css'
import { Link } from "react-router-dom"
import img1 from '../../assets/Vector 3.svg'
import descargables from "../../data"


// item
const Item = ({id, title, img, gratis}) => {
  return (
    <article className="descargable" key={id}>
        <img src={img} alt={title}/>
        <h3>{title}</h3>
        {
          gratis ? <Link to={'/descarga'} className="descargar">Descargar</Link> : <Link to='/compra' className="descargar">Comprar</Link>
        }
    </article>
  )
 
}


// itemdetail
const Shop = () => {
 
  return (
    <AnimatedPages>
   <section id='shop'>
   <div className="shop-title"> 
        <h2>Shop</h2>
        <div className="square"><img src={img1} alt={descargables.title} /></div>
        </div>

        <section className="descargables_list">
        {descargables.map((descargable) => (
           <Item key={descargable.id} id={descargable.id} title={descargable.title} img={descargable.img} gratis={descargable.gratis}/>
           ))}
        </section>
    </section>
    </AnimatedPages>
  
  )
}

export default Shop