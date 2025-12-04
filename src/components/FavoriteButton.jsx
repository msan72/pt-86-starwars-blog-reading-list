import useGlobalReducer from "../hooks/useGlobalReducer";

export function FavoriteButton({ element }) {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.find(item => item._id === element._id);

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: "DELETE_FAVORITE",
                payload: element._id
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: element
            });
        }
    };

    return (
        <button onClick={handleFavorite} className="btn btn-light">
            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        </button>
    );
}