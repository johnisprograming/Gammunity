import React from 'react';
import { Link } from 'react-router-dom';
import './GameCategory.css';


const GameCategory = () => {
   
    
    return (
        <div>
            <Link to='/'><img className="logoimg" alt="logo" src="img/logo.png" /></Link>
        
        <div className='GameCategory'>
            <ul>
                <li>
                    <Link to='/FPS'>FPS</Link>
                    
                    <Link to='/action'>액션</Link>
                    
                    <Link to='/RPG'>RPG</Link>
                    
                    <Link to='/adventure'>어드벤처</Link>
                    
                    <Link to='/sport'>스포츠</Link>
                    
                    <Link to='/music'>리듬</Link>
                 </li>    
            </ul> 
 
        </div>
        </div>
    );
};

export default GameCategory;