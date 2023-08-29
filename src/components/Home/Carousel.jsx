import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="Primera imagen"
        />
        {/* <Carousel.Caption>
          <h3>Título de la imagen 1</h3>
          <p>Descripción de la imagen 1.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="Segunda imagen"
        />
        {/* <Carousel.Caption>
          <h3>Título de la imagen 2</h3>
          <p>Descripción de la imagen 2.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="Segunda imagen"
        />
        {/* <Carousel.Caption>
          <h3>Título de la imagen 2</h3>
          <p>Descripción de la imagen 2.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;






/*
const Carousel = () => {
    return (
        <Carousel>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
    );
}

export default Carousel;*/