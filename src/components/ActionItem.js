import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
const ActionItem = ({game}) => {
    const {key,title,genre,price,platform,image,add}=game;
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
                <p><Link className='des' to=''>더보기</Link></p>
            </div>
        </div>
    );
};

export default ActionItem;