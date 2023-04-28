import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../Favorites/Favorite.module.css" ;
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
        
    }
    return(
        <div className={style.container}>
            <div>
                <select onChange={handlerOrder}>
                <option value="order" disabled="disabled">Order By</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>

                <select onChange={handlerFilter}>
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            {
                myFavorites.map((character) => {
                    return(
                        
                        <div className={style.CardsStyle} key={"favoritesdiv"}>
                            
                            <NavLink to={`/detail/${character.id}`}>
                            <img className={style.img} src={character.image} alt={character.name} />
                            </NavLink>
                            <NavLink to={`/detail/${character.id}`}>
                            <h2 className="card-name">{character.name}</h2>
                            </NavLink>
                            <h2>{character.status}</h2>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                            <h2>{(character.origin)}</h2>
                        </div>
                        
                    )
                })
            }

        </div>
    )
}

export default Favorites;