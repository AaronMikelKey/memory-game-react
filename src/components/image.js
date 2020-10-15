import React from 'react';

/*
may need to use this.  We'll see.

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images/list', false, /\.(png|jpe?g|svg)$/));
//<img src={images['doggy.png']} />
*/

const Doggo = (imglist, index) => {
    return (
        <img url={ imglist[index].url } alt={ imglist[index].name }/>
    )
}

export default Doggo;