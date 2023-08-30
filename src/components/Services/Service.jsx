const Service = ({title, subtitle, content, url}) => {
    return (
        <div className="service_Container">
            <h5 className="service_Title">{title}</h5>
            <p className="service_Subtitle">{subtitle}</p>
            <p className="service_Content">{content}</p>
            <button className="service_Button">Contratar</button>
        </div>
    );
}

export default Service;