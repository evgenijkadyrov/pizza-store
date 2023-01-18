import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategories, setSortBy} from "../redux/filters-reducer";
import {fetchPizzas} from "../redux/pizzas-reducer";
import LoadingBlock from "../components/PizzaBlock/LoadingBlok";


export const Home = () => {
    const items = useSelector((state) => state.pizzas.items)
    const activeCategory = useSelector((state) => state.filters.categories)
    const activeSortBy = useSelector((state) => state.filters.sortBy)
    const isLoaded = useSelector((state) => state.pizzas.isLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas(activeCategory,activeSortBy))
    }, [activeCategory,activeSortBy])
    const onSelectedCategories = useCallback((index) => {
        dispatch(setCategories(index))
    }, [])
    const onSelectedSort = useCallback((item) => {
        dispatch(setSortBy(item))
    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    onClickItem={onSelectedCategories}
                activeItem={activeCategory}/>
                <SortPopup items={[{name: 'популярности', type: 'rating',order:'desc'},
                    {name: 'цене', type: 'price',order:'desc'},
                    {name: 'алфавиту', type: 'name',order:'asc'}]}
                           onClickItem={onSelectedSort} activeItem={activeSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded? items.map(item => <PizzaBlock key={item.id} {...item} />):Array(10).fill(<LoadingBlock/>)}
            </div>

        </div>
    );
};

