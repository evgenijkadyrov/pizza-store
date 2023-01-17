import React, {useCallback} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategories, setSortBy} from "../redux/filters-reducer";


export const Home = () => {
    const items = useSelector((state) => state.pizzas.items)
    const dispatch = useDispatch()

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
                    onClickItem={onSelectedCategories}/>
                <SortPopup items={[{name: 'популярности', type: 'popular'},
                    {name: 'цене', type: 'price'},
                    {name: 'алфавиту', type: 'alphabet'}]}
                           onClickItem={onSelectedSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item => <PizzaBlock key={item.id} {...item} />)}
            </div>

        </div>
    );
};

