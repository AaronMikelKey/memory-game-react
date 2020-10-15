import React from 'react';
import Doggo from '../components/image';
import imglist from '../images/list';

//doggo(imgList, index)
const Card = () => {
    const list = imglist;
    return (
        <div>
            <Doggo imglist={ list } index={0}/>
            <p> { imglist.name } </p>
        </div>
    )
}

export default Card;