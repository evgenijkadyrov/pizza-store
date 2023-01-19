
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'
const SET_TOTAL_PRICE='SET_TOTAL_PRICE'
const ADD_PIZZA_TO_CART='ADD_PIZZA_TO_CART'



const initialState = {
    items: {},
    totalCount:0,
    totalPrice:0

}

export const setTotalCount = (items) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: items
    }
}
export const setTotalPrice = (items) => {
    return {
        type: SET_TOTAL_PRICE,
        payload: items
    }
}
export const addPizzaToCart=(pizzaObj)=>{
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObj
    }
}


const action = setTotalCount | setTotalPrice

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case SET_TOTAL_PRICE:
            return {...state, totalPrice: action.payload}
        case ADD_PIZZA_TO_CART:
            const newItems={...state.items,[action.payload.id]:!state.items[action.payload.id]
                    ?[action.payload]
                    :[...state.items[action.payload.id],action.payload]}
            const commonArray=[].concat.apply([],Object.values(newItems))
            return {...state,
                items:newItems,
                totalCount: commonArray.length,
                totalPrice: commonArray.reduce((acc,item)=>item.price+acc,0)

            }
        default:
            return state
    }
}
// export const fetchPizzas = (activeCategory, activeSortBy) => (dispatch) => {
//     dispatch(isLoaded(false))
//     pizzasAPI.getPizzas(activeCategory, activeSortBy).then(response => {
//         dispatch(setPizzas(response.data))
//         dispatch(isLoaded(true))
//
//     })

// }
