import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import style from "../Detail/Detail.module.css"



const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacter(data);
            axios
              .all(character.episode.map((url) => axios(url)))
              .then((results) => {
                const episodeInfo = results.map(({ data }) => ({
                  number: data.episode.split("/").slice(-1)[0],
                  name: data.name
                }));
                setEpisodes(episodeInfo);
              });
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      );
      return setCharacter({});
    }, [detailId]);
  
    return (
      <div className={style.detail}>
        <NavLink className={style.returnhome} to="/home" element></NavLink>
        <img src={character.image} alt={character.name} className={style.imagen} />
        <div className={style.divname}>
          <h1 className={style.name}>{character?.name}</h1>
        </div>
  
        <div className={style.divstatus}>
          <h2>Status: </h2>
          <h2 className={style.status}>{character?.status}</h2>
        </div>
  
        <div className={style.divspecies}>
          <h2>Specie: </h2>
          <h2 className={style.species}>{character?.species}</h2>
        </div>
  
        <div className={style.divgender}>
          <h2>Gender: </h2>
          <h2 className={style.gender}>{character?.gender}</h2>
        </div>
  
        <div className={style.divorigin}>
          <h2>Origin:</h2>
          <h2 className={style.origin}>{character?.origin?.name}</h2>
        </div>
  
        <div className={style.divepisode}>
          <h2>Episodes:</h2>
          {episodes?.map((episode, index) => (
            <h5 key={index}>
              {episode.number}: {episode.name}
            </h5>
          ))}
        </div>
      </div>
    );
  };

export default Detail;