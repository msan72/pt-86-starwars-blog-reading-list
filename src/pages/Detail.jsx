import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export function Detail() {
    const { store } = useGlobalReducer()
    const { type, id } = useParams()

    const character = store.characters.find(char => char.uid === id);
    const planet = store.planets.find(item => item.uid === id);
    const vehicle = store.vehicles.find(i => i.uid === id);

    let content;

    switch (type) {
        case 'characters':
            content = (
                <div className="container mt-5 ">
                    <div className="d-flex flex-wrap align-items-start">

                        <img
                            src={character.image}
                            className="flex-image me-4 mb-3"
                            alt={character.properties.name}
                        />

                        <div className="flex-grow-1">
                            <h2 className="mb-4">{character.properties.name}</h2>

                            <ul className="list-group list-group-flush mb-3 ">
                                <li className="list-group-item black text-white border-dark">Eye color: {character.properties.eye_color}</li>
                                <li className="list-group-item black text-white border-dark">Hair color: {character.properties.hair_color}</li>
                                <li className="list-group-item black text-white border-dark">Gender: {character.properties.gender}</li>
                                <li className="list-group-item black text-white border-dark">Height: {character.properties.height}</li>
                                <li className="list-group-item black text-white border-dark">Skin color: {character.properties.skin_color}</li>
                                <li className="list-group-item black text-white border-dark">Birth year: {character.properties.birth_year}</li>
                            </ul>

                            <Link to="/" className="btn btn-outline-secondary">Go back</Link>
                        </div>
                    </div>
                </div>
            );
            break;

        case 'planets':
            content = (
                <div className="container mt-5 ">
                    <div className="d-flex flex-wrap align-items-start">
                        {/* Imagen */}
                        <img
                            src={planet.image}
                            className="flex-image me-4 mb-3"
                            alt={planet.properties.name}
                        />

                        {/* Texto */}
                        <div className="flex-grow-1">
                            <h2 className="mb-4">{planet.properties.name}</h2>

                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item black text-white border-dark">Climate: {planet.properties.climate}</li>
                                <li className="list-group-item black text-white border-dark">Terrain: {planet.properties.terrain}</li>
                                <li className="list-group-item black text-white border-dark">Gravity: {planet.properties.gravity}</li>
                                <li className="list-group-item black text-white border-dark">Population: {planet.properties.population}</li>
                                <li className="list-group-item black text-white border-dark">Rotation period: {planet.properties.rotation_period}</li>
                                <li className="list-group-item black text-white border-dark">Orbital period: {planet.properties.orbital_period}</li>
                            </ul>

                            <Link to="/" className="btn btn-outline-secondary">Go back</Link>
                        </div>
                    </div>
                </div>
            );
            break;

        case 'vehicles':
            content = (
                <div className="container mt-5">
                    <div className="d-flex flex-wrap align-items-start">
                        {/* Imagen */}
                        <img
                            src={vehicle.image}
                            className="flex-image me-4 mb-3"
                            alt={vehicle.properties.name}
                        />

                        {/* Texto */}
                        <div className="flex-grow-1">
                            <h2 className="mb-4">{vehicle.properties.name}</h2>

                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item black text-white border-dark">Model: {vehicle.properties.model}</li>
                                <li className="list-group-item black text-white border-dark">Vehicle class: {vehicle.properties.vehicle_class}</li>
                                <li className="list-group-item black text-white border-dark">Manufacturer: {vehicle.properties.manufacturer}</li>
                                <li className="list-group-item black text-white border-dark">Passengers: {vehicle.properties.passengers}</li>
                                <li className="list-group-item black text-white border-dark">Crew: {vehicle.properties.crew}</li>
                            </ul>

                            <Link to="/" className="btn btn-outline-secondary">Go back</Link>
                        </div>
                    </div>
                </div>
            );
            break;

        default:
            content = (<p>No se encontró el tipo.</p>);
    }

return (
    <div className="container">
        {content}
    </div>
)
}