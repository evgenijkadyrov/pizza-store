import React, {useState} from 'react';

export const Categories = ({items,onClickItem}) => {
    const [activeItem, setActiveItem]=useState(null)
    const onSelectItem=(item)=>{
        setActiveItem(item)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem===null?"active":''} onClick={()=>onSelectItem(null)}>Все</li>
                {items.map((item,index)=> <li onClick={()=>onSelectItem(item)}
                                              key={`${item}_${index}`}
                                              className={activeItem===item?'active':''}
                    >{item}
                </li>
                 )}

            </ul>
        </div>
    );
};

