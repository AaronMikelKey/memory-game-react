import React from 'react';
import { list, list12, list24, list36 } from './list';
import shuffleArray from './shuffleArray';


const Card = (props) => {
    let newList;
    switch(props.mode) {
        
        case 12:
            newList = list12;
            break;
        case 24:
            newList = list24;
            break;
        case 36:
            newList = list36;
            break;
        case 50:
            newList = list;
            break;
        default: 
            newList = list12;
            break;
    }
    let shuffledList = shuffleArray(newList);
    return shuffledList.map(item => (
        <div
            className="card"
            key={item.name}
            id={item.name}
            onClick={props.click}
        >
            <h4>  {item.name} </h4>
            <h4> {item.description} </h4>
            <img src={item.url} alt={item.name} />
        </div>
    ));
}


export default Card;