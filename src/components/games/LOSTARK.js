import React from "react";
import styled from "styled-components";
import './detail-view.css'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.6) 70%,
      rgba(20, 20, 20, 0.9)
    ),
    linear-gradient(
      to left,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.6) 70%,
      rgba(20, 20, 20, 0.9)
    ),
    url(https://www.idlewp.com/wp-content/uploads/2022/02/lost-ark-wallpaper-idlewp-2.jpg);
  background-size: cover;
`;

function LOSTARK() {
    return (
        <div>
            <Container>
            <div className='home_header'>
                    <a href="/"><img className="logo" alt="logo" src="img/logo.png"/></a>
            </div>
            <div id="contaniner">
                <div className="wrap_detail_view">
                    <div>
                        <div className="game_detail">
                            <h3>
                                게임상세
                            </h3>
                        </div>
                    </div>

                    <div className="tit_heading_wrap">
                        <div className="sect_base_movie">
                            <div className="box-image">
                                <a href="https://static-news.smilegate.com/board/%EB%A9%94%EC%9D%B8_%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC_%ED%82%A4%EC%95%84%ED%8A%B8.jpg"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://static-news.smilegate.com/board/%EB%A9%94%EC%9D%B8_%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC_%ED%82%A4%EC%95%84%ED%8A%B8.jpg"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>로스트아크</strong>
                                    <p className="title_p">LOST ARK</p>
                                </div>

                                <div className="spec">
                                    <dl>
                                        <dt>플랫폼 :&nbsp;</dt>
                                        <dd>
                                            온라인
                                        </dd>
                                        <dt>장르 :&nbsp;</dt>
                                        <dd>
                                            MMORPG
                                        </dd>
                                        <dt>개발사 :&nbsp;</dt>
                                        <dd>
                                            <a className="spec_link" href="https://www.smilegate.com/ko/main/main.asp/">스마일게이트 RPG</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            스마일게이트 RPG
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                            18세
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2019.12.04</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">줄거리</h5>
                        </div>
                        <div className="game_story">
                            <p className="p_story">
                                '로스크아크'는 쿼터뷰 방식을 채택한 MMORPG로, 논타겟팅 핵앤슬래쉬 액션이 핵심이다. 
                                다양한 카메라 시점과 높낮이에 차이를 둔 입체적인 맵을 제공해, 여타 쿼터뷰 방식 게임에서 느껴지는 정적인 느낌을 상쇄했다. 
                                또한 거대 보스가 플레이어를 쫓는 추격전이나 나선계단을 올라가며 몬스터를 잡는 구성의 던전도 제공해 지루함을 덜었다.
                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/F00dME5sLH0?controls=0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/TTJl2L3_Dvw?controls=0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                            </iframe>
                        </div>
                    </div>

                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">스크린샷</h5>
                        </div>
                        <div className="game_screenshot" >
                            <img className="screensho_img" src="http://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/a8941b9415c048c4b3650bcc2c0a4fd4/f02a8715d7c94ab1aa68d3a28689feb5.jpg"/>
                            <img className="screensho_img" src="http://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/bc8b1c0abe71466ca8a81dcbb3a31a11/13259e0cd3d84569995dffdad2565e58.jpg"/>
                            <img className="screensho_img" src="http://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/39419bdc8e954e9e975f4c4d897c982c/497e3cec7a4945b696e8be065adc5c96.jpg"/>
                            <img className="screensho_img" src="http://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1950c0dc33264e649160bdf706db0d87/2adb6fd45cd0468e88c26f864b6c2ee6.jpg"/>
                            <img className="screensho_img" src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/bc91a5d612db4b20aa40da6fada8ea05/4be9cb7465ca48e3927b2d4b6f0e3451_1541927503.jpg"/>
                            <img className="screensho_img" src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1f12b01734844f728295c2de5d981d27/ba996addbe76409eba01bd40e839982a_1541928604.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }
  export default LOSTARK;