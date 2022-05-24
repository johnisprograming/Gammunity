import React from 'react';
import MusicItem from './MusicItem';
import { useState } from 'react';
import GameCategory from './GameCategory';
import Menu from './Menu';
const Music = () => {
    const [games,setGame]=useState([
        {   
            key:"1",
            title:"Just shape & Beat",
            genre:"리듬",
            price:"16500",
            platform:"Windows, PS4, Switch",
            image:"/image/Justshape.jpg",
            

        },
        {
            key:"2",
            title:"비트 세이버 ",
            genre:"리듬",
            price:"31,000",
            platform:"Steam VR, PS4 VR",
            image:"/image/saber.jpg"
        },
        {
            key:"3",
            title:"Spin Rythm XD",
            genre:"리듬",
            price:"20,000",
            platform:"Windows, Mac",
            image:"/image/Spin.jpg"
        },
        {
            key:"4",
            title:"Sayonara wild hearts",
            genre:"리듬",
            price:"13,500",
            platform:"Windows, PS4, Switch, iOS",
            image:"/image/hearts.jpg"
        },
        {
            key:"5",
            title:"Audiosurf2",
            genre:"리듬",
            price:"15,500",
            platform:"Windows",
            image:"/image/Audiosurf2.jpg"
        },
        {
            key:"6",
            title:"Dj Max Respect V",
            genre:"리듬",
            price:"49,800",
            platform:"Windows",
            image:"/image/Respect.jpg"
        }
]);
    return (
        <div>
            <GameCategory/>
            <Menu/>
            {
            games.map(function(game){
                return <MusicItem game={game} key={games.key}/>
            })}
        </div>
    );
        };

export default Music;