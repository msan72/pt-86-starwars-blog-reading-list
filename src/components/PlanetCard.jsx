import { Link } from "react-router-dom";
import { FavoriteButton } from "../components/FavoriteButton";

export function PlanetCard({ data }) {
    return (
        <div className="card my-card bg-custom-dark text-white" >
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{data.properties.name}</h3>
                <p className="card-text m-0"><strong>Climate </strong>{data.properties.climate}</p>
                <p className="card-text"><strong>Population </strong>{data.properties.population}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/planets/${data.uid}`} className="btn btn-outline-light">Learn more</Link>
                    <FavoriteButton element={data} />
                </div>
            </div>
        </div>
    )
}