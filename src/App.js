import './App.css';
import Home from './components/Home';
import LOL from './components/games/LOL';
import LOSTARK from './components/games/LOSTARK';
import FIFA4 from './components/games/FIFA4';
import { Route, Routes } from 'react-router-dom';
import GameCategory from './components/GameCategory';
import FPS from './components/FPS';
import Action from './components/Action';
import RPG from './components/RPG';
import Adventure from './components/Adventure';
import Sports from './components/Sports';
import Music from './components/Music';
import Ground from './components/Ground';
import { useState } from 'react';
import Rainbow from './components/Rainbow';
import Battlefield from './components/Battlefield';
import Overwatch from './components/Overwatch';
import Apex from './components/Apex';
import Valorant from './components/Valorant';
function App() {
  const [games,setGame]=useState([
    {   
        key:"1",
        title:"배틀그라운드",
        genre:"fps",
        price:"무료",
        platform:"Windows, XBO, PS4",
        image:"/image/battleground.jpg",
        add:"ground",
        grade:"15세 이용가, 청소년 이용불가"

    },
    {
        key:"2",
        title:"rainbow six siege ",
        genre:"fps",
        price:"22,000",
        platform:"PS4, Windows, XBO",
        image:"/image/rainbow.jpg",
        add:"rainbow",
        grade:"청소년 이용불가"
    },
    {
        key:"3",
        title:"배틀필드 2042",
        genre:"fps",
        price:"66,000",
        platform:"Windows, PS4, PS5, XBO, XSX",
        image:"/image/battlefield.jpg",
        add:"battlefield",
        grade:"청소년 이용불가"
    },
    {
        key:"4",
        title:"에이펙스 레전드",
        genre:"fps",
        price:"부분 유료화",
        platform:"Windows, PS4, XBO, Switch",
        image:"/image/apex.jpg",
        add:"apex",
        grade:"청소년 이용불가"
    },
    {
        key:"5",
        title:"발로란트",
        genre:"fps",
        price:"부분 유료화",
        platform:"Windows",
        image:"/image/valorant.jpg",
        add:"valorant",
        grade:"15세이상 이용가"
    },
    {
        key:"6",
        title:"오버워치",
        genre:"fps",
        price:"22,500",
        platform:"Windows, PS4, XBO, Switch",
        image:"/image/overwatch.jpg",
        add:"overwatch",
        grade:"12세 이용가, 15세 이용가"
    }
]);
  return (
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/LOL" element={<LOL/>} />
        <Route path="/LOSTARK" element={<LOSTARK/>} />
        <Route path="/FIFA4" element={<FIFA4/>} />
        <Route path="/gameCategory" element={<GameCategory/>} />
        <Route path='/FPS' element={<FPS games={games}/>}></Route>
                <Route path='/action' element={<Action/>}></Route>
                <Route path='/RPG' element={<RPG/>}></Route>
                <Route path='/adventure' element={<Adventure/>}></Route>
                <Route path='/sport' element={<Sports/>}></Route>
                <Route path='/music' element={<Music/>}></Route>
                
                {
            games.map(function(game){
                return <Route path='/FPS/ground' element={<Ground game={games[0]}/>}/>
            })
            }
             {
            games.map(function(game){
                return <Route path='/FPS/rainbow' element={<Rainbow game={games[1]}/>}/>
            })
            }
           {
            games.map(function(game){
                return <Route path='/FPS/battlefield' element={<Battlefield game={games[2]}></Battlefield>}/>
            })
            }
             {
            games.map(function(game){
                return <Route path='/FPS/apex' element={<Apex game={games[3]}/>}/>
            })
            }
            {
            games.map(function(game){
                return <Route path='/FPS/valorant' element={<Valorant game={games[4]}/>}/>
            })
            }
             {
            games.map(function(game){
                return <Route path='/FPS/overwatch' element={<Overwatch game={games[5]}/>}/>
            })
            }
      </Routes>
    </div>
  );
}

export default App;
