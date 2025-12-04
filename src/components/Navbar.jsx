import useGlobalReducer from "../hooks/useGlobalReducer";
import logo from "../assets/img/logosw.png"

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const deleteFavorite = (_id) => {
		dispatch({
			type: "DELETE_FAVORITE", payload: _id
		})
	}

	return (
		<div className="navbar navbar-dark bg-custom-dark px-5 mb-5 d-flex justify-content-between">
			<img
				src={logo}
				alt="logo Star Wars"
				className="mx-4"
				style={{ width: '150px', height: 'auto' }} />
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle mx-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="number-gray bg-secondary bor ms-1 me-1 ">
						{store.favorites.length}
					</span>
				</button>
				<ul className=" menu dropdown-menu dropdown-menu-dark">
					{
						store.favorites.map((person) => {
							return (
								<li
									key={person._id}
									className="d-flex justify-content-between align-items-center px-2 bg-dark text-light"
								><a className="dropdown-item active bg-dark" href="#">{person.properties?.name}</a>
									<button
										type="button"
										className="btn btn-transparent text-light"
										onClick={() => deleteFavorite(person._id)}>

										<i className="fa-solid fa-trash"></i></button>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
};