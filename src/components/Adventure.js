import React from 'react';
import AdventureItem from './AdventureItem';
import { useState } from 'react';
import GameCategory from './GameCategory';
import Menu from './Menu';
const Adventure = () => {
    const [games,setGame]=useState([
        {   
            key:"1",
            title:"it takes two",
            genre:"Adventure",
            price:"44,000",
            platform:"Windows, PS4, PS5, XBO, XSX",
            image:"/image/twos.jpg"

        },
        {
            key:"2",
            title:"GTA5 ",
            genre:"Adventure",
            price:"33,000",
            platform:"PS3, PS4, PS5, XBO, Windows",
            image:"/image/gta5.jpg"
        },
        {
            key:"3",
            title:"파크라이6",
            genre:"Adventure",
            price:"65,000,",
            platform:"Windows, PS4, PS5, XBO, XSX, Stadia",
            image:"/image/FAR.jpg"
        },
        {
            key:"4",
            title:"바이오하자드 빌리지",
            genre:"Adventure",
            price:"66,800",
            platform:"Windows, PS4, PS5, XBO, XSX",
            image:"/image/bio.jpg"
        },
        {
            key:"5",
            title:"갓 오브 워",
            genre:"Adventure",
            price:"59,800",
            platform:"PS4, Windows",
            image:"/image/god.jpg"
        },
        {
            key:"6",
            title:"고스트와이어: 도쿄",
            genre:"Adventure",
            price:"67,000",
            platform:"Windows, PS5, XSX",
            image:"/image/ghost.jpg"
        }
]);
    return (
        <div>
            <GameCategory/>
            <Menu/>
            {
            games.map(function(game){
                return <AdventureItem game={game} key={games.key}/>
            })}
        </div>
    );
};

export default Adventure;