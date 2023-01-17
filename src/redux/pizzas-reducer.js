const SET_PIZZAS = 'SET-PIZZAS'


const initialState = {
    items: [{
        "id": 0,
        "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        "name": "Kadirikus",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 803,
        "category": 0,
        "rating": 4
    },],
    isLoaded:false

}

export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
}
const action=setPizzas

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {...state, items: action.payload}

        default:
            return state
    }
}
