import {combineReducers, createStore} from "redux";
import {filtersReducer} from "./filters-reducer";
import {pizzasReducer} from "./pizzas-reducer";

const rootReducer=combineReducers({

        filters: filtersReducer,
        pizzas:pizzasReducer


}
)
export const store=createStore(rootReducer)
window.store=store