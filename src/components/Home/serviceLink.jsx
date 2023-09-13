import { Link } from "react-router-dom";


const ServiceLink = ({content, url, icon}) => {
    return (
        <div className="serviceContainer">
            <h2 className="serviceContent">{content}</h2>
            <img className="icon" src={icon} alt="icon" />
            <Link to={url} className="serviceButton">Más detalles</Link>
        </div>
    );
}

export default ServiceLink;