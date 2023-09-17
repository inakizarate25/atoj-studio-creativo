import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './styles.css'
import { Link} from "react-router-dom"
import descargables from "../../data"
import Separator from "../Separator/Separator"
import { FormattedMessage } from "react-intl"
import { langContext } from '../../context/langContext';
import { useContext } from "react";



// itemdetail
const Shop = () => {

  const descargablesGratis = descargables.filter((descargable) => descargable.gratis);
  const descargablesNoGratis = descargables.filter((descargable) => !descargable.gratis);

  const { locale } = useContext(langContext);

  return (
    <AnimatedPages>
      <section id='shop'>
        <h2><FormattedMessage id='shop.titulo' defaultMessage= 'Tienda'/></h2>
        <Separator />
       

        <section className="descargables_list">
        <div className="articulosLista">
    {descargablesGratis.map((descargable) => (
      <article className="descargable" key={descargable.id}>
        <img src={descargable.img} alt={descargable.title} />
        <h3>{locale == 'es-ES' ? descargable.title : descargable.enTitle}</h3>
        <Link to={`/descargable/${descargable.id}`} className="descargar">
        <FormattedMessage id='shop.descargar' defaultMessage= 'Descargar'/>
        </Link>
      </article>
    ))}
</div>
    <h2><FormattedMessage id='shop.tituloCompra' defaultMessage= 'Próximamente...'/></h2>
<div className="articulosLista venta">
    {descargablesNoGratis.map((descargable) => (
      <article className="descargable" key={descargable.id}>
        <img src={descargable.img} alt={descargable.title} />
        <h3>{locale == 'es-ES' ? descargable.title : descargable.enTitle}</h3>
        <Link className="comprar">
        <FormattedMessage id='shop.comprar' defaultMessage= 'Comprar'/>
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