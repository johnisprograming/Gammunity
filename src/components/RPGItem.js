import React from 'react';
import './Item.css'
const RPGItem = ({game}) => {
    const {key,title,genre,price,platform,image}=game;
    return (
        <div className='ItemBox'>
            <div className='titleImg'>
                <img className='img' src={image} />
                <p>{title}</p>
            </div>
            <div className='descript'>
                <p>장르 : {genre}</p>
                <p>platform : {platform}</p>
                <p>가격 : {price}</p>
            </div>
        </div>
    );
};

export default RPGItem;