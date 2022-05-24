import React from 'react';
import { Sidebar } from './Sidebar';
import './Menu.css'
const Menu = () => {
    return (
        <div className='Menu'>
            <Sidebar width={300} height={"100vh"}>
          <a className="Sidebar" href='#'>  
            <img className="Gammunity_logo"  alt="logo" src="/img/logo.png"/>
          </a>
          <h1></h1>
          <div className="menu">
          <ul>
            <li><a href='/FPS'>게임 찾기</a></li>
            <li><a href='#'>뉴스</a></li>
            <li><a href='#'>이벤트</a></li>
            <li><a href='#'>커뮤니티</a></li>
          </ul>
          </div>
        </Sidebar>
        </div>
    );
};

export default Menu;