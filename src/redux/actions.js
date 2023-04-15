import { ADD_FAV,REMOVE_FAV ,FILTER, ORDER, NOT_FILTER} from "./actions-types";


export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }

}

export const notFilter = (gender) => {
    return {
        type: NOT_FILTER,
        payload: gender
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type:ORDER,
        payload: order
    }
}
