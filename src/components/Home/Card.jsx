import './Home.css'
const Card = ({image, text}) => {

  return (      
        <div className="homeCard">            
            <img src={image} className="cardImg" alt="" />
            <div className="card-body">
                <h4 className="card-title">{text}</h4>
            </div>
        </div>
  )
}

export default Card