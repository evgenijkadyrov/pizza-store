import axios from "axios";

export const pizzasAPI = {
    getPizzas(activeCategory,activeSortBy) {
        return axios.get(`http://localhost:3001/pizzas?${activeCategory!==null?`category=${activeCategory}`:''}&_sort=${activeSortBy.type}&_order=${activeSortBy.order}`)
    }
}