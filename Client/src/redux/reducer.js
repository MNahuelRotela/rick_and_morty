import {ADD_FAV,FILTER,ORDER,REMOVE_FAV} from "./actions-types"


const initialState = {
    myFavorites: [],
    allCharacters: [],
}



const reducer = (state = initialState , {type,payload}) => {
    switch(type){

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters,payload],
                allCharacters: [...state.allCharacters,payload]
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }
        
        

        case FILTER:
            
            const allCharsFiltered = state.allCharacters.filter(character => character.gender === payload );
            return{
                ...state,
                myFavorites:
                payload ==="All"
                ? [...state.allCharacters]
                :allCharsFiltered
            }
        
        case ORDER:
            
            return{
                ...state,
                myFavorites: 
                    payload === "A" 
                    ? state.allCharacters.sort((a,b) => a.id - b.id )
                    : state.allCharacters.sort((a,b) => b.id - a.id  )
            }
        
        default:
            return {...state}
    }
}


export default reducer;