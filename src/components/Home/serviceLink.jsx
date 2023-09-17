import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const ServiceLink = ({content, url, icon}) => {
    return (
        <div className="serviceContainer">
            <h2 className="serviceContent">{content}</h2>
            <img className="icons" src={icon} alt="icon" />
            <Link to={url} className="serviceButton"><FormattedMessage id='home.serviceLink' defaultMessage='Más Detalles'/></Link>
        </div>
    );
}

export default ServiceLink;