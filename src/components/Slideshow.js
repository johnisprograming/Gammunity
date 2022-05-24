import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css"
import "./slick-theme.css"

export default class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,               // 스크롤바 아래 점으로 페이지네이션 여부
      infinite: true,           // 무한 반복 옵션	 
      speed: 500,               // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(1000ms -> 1초)
      slidesToShow: 3,          // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 1,        // 스크롤 한번에 움직일 컨텐츠 개수
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 5000 	// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (1000ms -> 1초)
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div> 
            <img className="slideImage" alt="game_01" src="img/Elden_Ring.jpg" />
          </div>
          <div>
            <img className="slideImage" alt="game_02" src="img/Gotham_Knights.jpg" />
          </div>
          <div>
            <img className="slideImage" alt="game_03" src="img/Hogwarts_LegacyLegacy.jpg" />
          </div>
          <div>
            <img className="slideImage" alt="game_04" src="img/Destiny_2_The_Witch_Queen.jpg" />
          </div>
          <div>
            <img className="slideImage" alt="game_05" src="img/Horizon_Forbidden_West.webp" />
          </div>
          <div>
            <img className="slideImage" alt="game_06" src="img/Saints_Row.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}