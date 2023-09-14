import AnimatedPages from "../AnimatedPages/AnimatedPages";
import Separator from "../Separator/Separator";
import './styles.css'

const Compra = () => {
  return (
    <AnimatedPages>
      <section id="compra">
        <div className=" compra-title">
          <h2>¡Ya casi es tuyo!</h2>
          <Separator />
          <span>
          Para continuar la compra, accede al siguiente botón, te redirigira al
          Whats App del Staff.
        </span>
        </div>
        <a href="https://wa.me/59170703903" className="btn-compra">CONTINUAR LA COMPRA</a>
      </section>
    </AnimatedPages>
  );
};

export default Compra;