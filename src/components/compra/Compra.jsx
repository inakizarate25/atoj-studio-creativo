import AnimatedPages from "../AnimatedPages/AnimatedPages";
import './styles.css'

const Compra = () => {
  return (
    <AnimatedPages>
      <section id="compra">
        <div className="shop-title compra-title">
          <h2>¡Ya casi es tuyo!</h2>
          <div className="square"></div>
          <span>
          Para continuar la compra, accede al siguiente botón, te redirigira al
          Whats App del Staff.
        </span>
        </div>
        <a href="#" className="btn-compra">CONTINUAR LA COMPRA</a>
      </section>
    </AnimatedPages>
  );
};

export default Compra;