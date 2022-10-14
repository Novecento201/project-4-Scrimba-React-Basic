import location from "../img/location-icon.png"

const Card = (props) => {
    console.log(props)
    return ( 
        <div className="card">
            {props.id !== 1 && <div className="cornice"></div> }
            <img src={props.imageUrl} alt="card-img" className="card-img" />
            <div className="container-card-info">
                <div className="info">
                    <img src={location} alt="" className="location-icon" />
                    <span className="location">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} target="blank" className="google-maps">View on Google Maps</a>
                </div>
                <h3 className="title-card">{props.title}</h3>
                <span className="date-card">{props.startDate} - {props.endDate}</span>
                <p className="description-card">{props.description}</p>
            </div>
        </div>
     );
}
 
export default Card;
