import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useState,useEffect } from "react";
import { addFav,removeFav } from "../../redux/actions";
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      }
      else {
         setIsFav(true);
         dispatch(addFav({id,name,status,species,gender,origin,image,onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.CardsStyle}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         
         <button className={style.cerrar} onClick={onClose}>X</button>
         <NavLink to={`/detail/${id}`}>
         <img className={style.img} src={image} alt={name} />
         </NavLink>
         <NavLink to={`/detail/${id}`}>
         <h2 className="card-name">{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{(origin)}</h2>
         
      </div>
   );
}
