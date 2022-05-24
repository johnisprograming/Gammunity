import React from 'react';
import ActionItem from './ActionItem';
import { useState } from 'react';
import GameCategory from './GameCategory';
import Menu from './Menu';
const Action = () => {
    const [games,setGame]=useState([
        {   
            key:"1",
            title:"다크 소울 리마스터",
            genre:"action",
            price:"45,800",
            platform:"PS4, XBO, Windows, Switch",
            image:"/image/dark.jpg",
            add:"dark"

        },
        {
            key:"2",
            title:"엘든링 ",
            genre:"action",
            price:"64,800",
            platform:"Windows, PS4, PS5, XBO, XSX, XSS",
            image:"/image/ring.jpg",
            daa:"ring"
        },
        {
            key:"3",
            title:"몬스터 헌터: 월드",
            genre:"action",
            price:"34,900,",
            platform:"Windows, PS4, XBO",
            image:"/image/monster.jpg",
            add:"monster"
        },
        {
            key:"4",
            title:"어쌔신 크리드",
            genre:"action",
            price:"11,000",
            platform:"Windows, PS3, XB360",
            image:"/image/ass.jpg",
            add:"ass"
        },
        {
            key:"5",
            title:"세키로: 섀도우 다이 트와이스",
            genre:"action",
            price:"59,800",
            platform:"Windows",
            image:"/image/se.jpg",
            add:"shadow"
        },
        {
            key:"6",
            title:"툼 레이더",
            genre:"action",
            price:"23,200",
            platform:"Windows, Mac, Linux, PS3, XB360, PS4, XBO",
            image:"/image/tom.jpg",
            add:"tom"
        }
]);
    return (
        <div>
            <GameCategory/>
            <Menu/>
              {
            games.map(function(game){
                return <ActionItem game={game} key={games.key}/>
            })}
        </div>
    );
};

export default Action;