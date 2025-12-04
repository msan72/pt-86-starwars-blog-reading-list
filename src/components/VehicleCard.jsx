import { Link } from "react-router-dom";
import { FavoriteButton } from "../components/FavoriteButton";

export function VehicleCard({ data }) {
    return (
        <div className="card my-card bg-custom-dark text-white" >
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{data.properties.name}</h3>
                <p className="card-text m-0"><strong>Class </strong>{data.properties.vehicle_class}</p>
                <p className="card-text"><strong>Crew </strong>{data.properties.crew}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/vehicles/${data.uid}`} className="btn btn-outline-light">Learn more</Link>
                    <FavoriteButton element={data} />
                </div>
            </div>
        </div>
    )
}