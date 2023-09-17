import fondo from "./assets/fondo.svg";
import contenido from "./assets/Rectangle7.png";
import buyer from "./assets/Rectangle8.png";
import copy from "./assets/Rectangle9.png";

const products = [
  {
    id: 1,
    title: "Plantilla Buyer Persona",
    enTitle: "Buyer Person Template",
    description: "Descripcion del descargable 3",
    img: buyer,
    gratis: true,
    link: "https://atojstudiocreativo.notion.site/Plantilla-Buyer-Persona-1e92237b76e24076b85bdb466a593cfd?pvs=4",
  },
  {
    id: 2,
    title: "Plantillas de Copywriting",
    enTitle: "Copywriting Templates",
    description: "Descripcion del descargable 5",
    img: copy,
    gratis: true,
    link: "https://atojstudiocreativo.notion.site/Plantillas-de-Copywriting-30242918922d49fbb5f856091b536847?pvs=4",
  },
  {
    id: 3,
    title: "Plantilla Contenido Mensual",
    enTitle: "Monthly Content Template",
    description: "Descripcion del descargable 4",
    img: contenido,
    gratis: true,
    link: "https://atojstudiocreativo.notion.site/51cae1d0d6c24c27bc56242576039e97?v=463d4daa28d0488da39dde69929c75ea&pvs=4",
  },
  {
    id: 4,
    title: "Descargable 1",
    enTitle: "Downloadable 1",
    description: "Descripcion del descargable 1",
    img: fondo,
    gratis: false,
  },
  {
    id: 5,
    title: "Descargable 2",
    enTitle: "Downloadable 1",
    description: "Descripcion del descargable 2",
    img: fondo,
    gratis: false,
  },
  {
    id: 6,
    title: "Descargable 6",
    enTitle: "Downloadable 1",
    description: "Descripcion del descargable 6",
    img: fondo,
    gratis: false,
  },
];

export const getDescById = (descId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products.find(desc => desc.id === descId))
    }, 100);
  })
}
export default products;
