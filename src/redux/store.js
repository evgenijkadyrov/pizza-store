import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {filtersReducer} from "./filters-reducer";
import {pizzasReducer} from "./pizzas-reducer";
import thunk from "redux-thunk";
import {cartReducer} from "./cart-reducer";

const rootReducer=combineReducers({

        filters: filtersReducer,
        pizzas:pizzasReducer,
    cart:cartReducer


}
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
 ));
//export const store=createStore(rootReducer,applyMiddleware(thunk ))
window.store=store