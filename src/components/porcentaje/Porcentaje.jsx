import './styles.css'

const Porcentaje = ({porcentaje, titulo}) => {

  return (
    <div className='porcentaje'>
        <h4>{titulo}</h4>
        <span>{porcentaje}%</span>
    </div>
  )
}

export default Porcentaje