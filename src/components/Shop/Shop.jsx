import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './styles.css'
import { Link} from "react-router-dom"
import descargables, { getDescById } from "../../data"
import Separator from "../Separator/Separator"



// itemdetail
const Shop = () => {

  const descargablesGratis = descargables.filter((descargable) => descargable.gratis);
  const descargablesNoGratis = descargables.filter((descargable) => !descargable.gratis);

  return (
    <AnimatedPages>
      <section id='shop'>
        <h2>Shop</h2>
        <Separator />
       

        <section className="descargables_list">
        <div className="articulosLista">
    {descargablesGratis.map((descargable) => (
      <article className="descargable" key={descargable.id}>
        <img src={descargable.img} alt={descargable.title} />
        <h3>{descargable.title}</h3>
        <Link to={`/descargable/${descargable.id}`} className="descargar">
          Descargar
        </Link>
      </article>
    ))}
</div>
    <h2>Proximamente...</h2>
<div className="articulosLista venta">
    {descargablesNoGratis.map((descargable) => (
      <article className="descargable" key={descargable.id}>
        <img src={descargable.img} alt={descargable.title} />
        <h3>{descargable.title}</h3>
        <Link to="/compra" className="comprar">
          Comprar
        </Link>
      </article>
    ))}
    </div>
        </section>
    </section>
    </AnimatedPages>
  
  )
}

export default Shop