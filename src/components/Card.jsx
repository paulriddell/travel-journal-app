
export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image--container">
                <img className="card--image" src={props.imageUrl} />
            </div>
            <div className="card--content--container">
                <div className="card--info">
                    <img className="card--point" src='../images/Fill 219.png' />
                    <span className="card--location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="card--googlemap">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <div className="card--stats">
                    <div className="card--dates">{props.startDate} - {props.endDate}</div>
                    <div className="card--description">{props.description}</div>
                </div>
            </div>
        </div>
    )
}