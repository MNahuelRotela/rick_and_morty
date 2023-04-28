import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from "./components/Nav/Nav";
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Page404 from './components/404Page/Page404';
import Form from "./components/Form/Form";
import axios from 'axios';
import {Routes,Route,useLocation,useNavigate} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Favorites from "./components/Favorites/Favorites";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character/";
// const API_KEY = "22aa151d334a.6fe0c42c789eb56a8b57";


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters,setCharacters] = useState([ ]);
   const [access,setAccess] = useState(false);

   const email = "usuario@gmail.com";
   const password = "pass123"


   const login = (userData) => {
      if (userData.email === email && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }
   

   useEffect(() => {
      !access && navigate('/');// eslint-disable-next-line
   },[access]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
      

   const onClose = (id) =>{
      setCharacters(
         characters.filter(character => character.id !== id)
      )
   }


   return (
      <div className='App'>
         {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch} />}
         
         
         <Routes>
            
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/" />
            <Route path="/404" element={<Page404/>} />
            <Route path="/home" element={<Cards onClose={onClose}
          characters={characters}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="detail/:detailId" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          
         </Routes>
      </div>
   );
}

export default App;
