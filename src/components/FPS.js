import React, { useState } from 'react';
import FPSItem from './FPSItem';
import GameCategory from './GameCategory';
import Menu from './Menu';

const FPS = ({games}) => {
    
    return (
        <div>
            
            <GameCategory/>
            <Menu/>
            {
                
            games.map(function(game){
                return <FPSItem game={game} key={games.key}/>
            })}
            
        </div>
    );
};

export default FPS;