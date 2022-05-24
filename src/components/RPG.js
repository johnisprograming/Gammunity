import React from 'react';
import { useState } from 'react';
import GameCategory from './GameCategory';
import RPGItem from './RPGItem';
import Menu from './Menu';
const Rpg = () => {
    const [games,setGame]=useState([
        {   
            key:"1",
            title:"메이플 스토리",
            genre:"RPG",
            price:"부분유료화",
            platform:"Windows",
            image:"/image/maple.jpg"

        },
        {
            key:"2",
            title:"로스트 아크 ",
            genre:"RPG",
            price:"부분유료화",
            platform:"Windows",
            image:"/image/lostark.jpg"
        },
        {
            key:"3",
            title:"던전 앤 파이터",
            genre:"RPG",
            price:"부분유료화",
            platform:"Windows",
            image:"/image/dan.jpg"
        },
        {
            key:"4",
            title:"검은 사막",
            genre:"RPG",
            price:"부분 유료화",
            platform:"Windows",
            image:"/image/black.jpg"
        },
        {
            key:"5",
            title:"리니지",
            genre:"RPG",
            price:"부분 유료화",
            platform:"Windows",
            image:"/image/lin.jpg"
        },
        {
            key:"6",
            title:"마비노기 영웅전",
            genre:"RPG",
            price:"부분 유료화",
            platform:"Windows",
            image:"/image/ma.jpg"
        }
]);
    return (
        <div>
            <GameCategory/>
            <Menu/>
            {
            games.map(function(game){
                return <RPGItem game={game} key={game.key}/>
            })}
        </div>
    );
};

export default Rpg;