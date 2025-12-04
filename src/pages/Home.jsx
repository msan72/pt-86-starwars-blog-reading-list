import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Carousel } from "../components/Carousel.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { VehicleCard } from "../components/VehicleCard.jsx";
import { getAllCharacters, getAllVehicles, getAllPlanets } from "../services/starWarsApi.jsx";
import { useEffect } from "react";

export const Home = () => {

    const { store, dispatch } = useGlobalReducer();

    async function fetchPeople() {
        const data = await getAllCharacters()
        if (data) {
            dispatch({ type: 'SET_CHARACTERS', payload: data })
        }
    }

    async function fetchPlanets() {
        const data = await getAllPlanets()
        if (data) {
            dispatch({ type: 'SET_PLANETS', payload: data })
        }
    }

    async function fetchVehicles() {
        const data = await getAllVehicles()
        if (data) {
            dispatch({ type: 'SET_VEHICLES', payload: data })
        }

    }

    useEffect(() => {
        fetchPeople()
        fetchPlanets()
        fetchVehicles()
    }, [])

    return (
        <div className="container">
            <Carousel
                title='Characters'
                items={store.characters}
                renderCard={(character) => <CharacterCard data={character} />}
            />

            <Carousel
                title='Planets'
                items={store.planets}
                renderCard={(planet) => <PlanetCard data={planet} />}
            />

            <Carousel
                title='Vehicles'
                items={store.vehicles}
                renderCard={(vehicle) => <VehicleCard data={vehicle} />}
            />
        </div>
    );
}; 