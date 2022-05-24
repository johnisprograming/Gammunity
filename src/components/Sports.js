import React from 'react';
import { useState } from 'react';
import GameCategory from './GameCategory';
import SportsItem from './SportsItem';
import Menu from './Menu';
const Sports = () => {
    const [games,setGame]=useState([
        {   
            key:"1",
            title:"FIFA21",
            genre:"Sport",
            price:"72,000",
            platform:"Windows, PS4, XBO, Switch",
            image:"/image/fifa21.jpg"

        },
        {
            key:"2",
            title:"매든 NFL 21 ",
            genre:"Sport",
            price:"72,000",
            platform:"Windows, PS4, PS5, XBO, XSX",
            image:"/image/madden.jpg"
        },
        {
            key:"3",
            title:"NHL 21",
            genre:"Sport",
            price:"72,000,",
            platform:"PS4, XBO",
            image:"/image/nhl21.jpg"
        },
        {
            key:"4",
            title:"NBA 2K21",
            genre:"Sport",
            price:"65,000",
            platform:"Windows, PS4, PS5, XBO, XSX, Switch",
            image:"/image/nba.jpg"
        },
        {
            key:"5",
            title:"MLB 더쇼 21",
            genre:"Sport",
            price:"79,800",
            platform:"PS4, PS5, XBO, XSX",
            image:"/image/mlb.jpg"
        },
        {
            key:"6",
            title:"UFC4",
            genre:"Sport",
            price:"72,000",
            platform:"PS4, XBO",
            image:"/image/ufc.jpg"
        }
]);
    return (
        <div>
            <GameCategory/>
            <Menu/>
            {
            games.map(function(game){
                return <SportsItem game={game} key={games.key}/>
            })}
        </div>
    );
        };

export default Sports;