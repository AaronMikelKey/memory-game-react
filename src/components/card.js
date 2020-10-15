import React from 'react';
import imglist from './list';


const Card = () => {
    const list = imglist;

    return list.map(item => {
        return (
            <div className="card" key={ item.name }>
                <h4>  { item.name } </h4>
                <h4> { item.description } </h4>
                <img src={ item.url } alt={ item.name } />
            </div>
        );
   })
}

export default Card;