import Slideshow from './Slideshow'
import Ranking from './Ranking';
import './home.css'
import Menu from './Menu';


function Home() {
  return (
    <div className="Home">
        <div className='home_header'>
            <img className="logo" alt="logo" src="img/logo.png" />
        </div>
       <Menu/>
      <Slideshow/>
      <Ranking/>
    </div>
  );
}

export default Home;
