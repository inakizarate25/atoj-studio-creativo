const ServiceLink = ({title, content, url}) => {
    return (
        <div className="serviceContainer">
            <h3 className="serviceTitle">{title}</h3>
            <h2 className="serviceContent">{content}</h2>
            <button className="serviceButton">Ver más</button>
        </div>
    );
}

export default ServiceLink;