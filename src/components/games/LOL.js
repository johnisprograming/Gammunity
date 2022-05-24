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
    url(https://pbs.twimg.com/media/ElTI1GTVcAEdwAE?format=jpg&name=4096x4096);
  background-size: cover;
`;

function GameInfo() {
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
                                <a href="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>리그 오브 레전드</strong>
                                    <p className="title_p">League of Legends</p>
                                </div>

                                <div className="spec">
                                    <dl>
                                        <dt>플랫폼 :&nbsp;</dt>
                                        <dd>
                                            온라인
                                        </dd>
                                        <dt>장르 :&nbsp;</dt>
                                        <dd>
                                            AOS
                                        </dd>
                                        <dt>개발사 :&nbsp;</dt>
                                        <dd>
                                            <a className="spec_link" href="http://www.riotgames.com/">라이엇 게임즈</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            라이엇게임즈코리아
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                            12세
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2009.10.27</dd>
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
                            '리그 오브 레전드'는 실시간 전투와 협동을 통한 팀플레이를 주요 콘텐츠로 내세운 AOS 게임이다. 
                            플레이어는 100명이 넘는 챔피언 중 한 명을 골라서 다른 유저와 팀을 이루어 게임을 즐길 수 있다. 
                            전투 전에 룬과 특성, 소환사 주문을 자신의 플레이에 맞게 설정할 수 있으며, 
                            각 챔피언의 역할에 따른 장단점, 순간순간 달라지는 전황, 아이템을 통한 상황 역전 등을 게임에서 만날 수 있다.
                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/MGwCtqdIBqA?controls=0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                            </iframe>
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/mDYqT0_9VR4?controls=0" 
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
                            <img className="screensho_img" src="https://www.wpick.kr/wp-content/uploads/2022/02/league-of-legends-guide-scaled.jpg"/>
                            <img className="screensho_img" src="https://w.namu.la/s/7399e2f79a3cc2963ff7121a1c6802a58923eed7475b078b3f97d14615a603c811c2f5b52b313ab0be79c2d19fe766424eebc68dd9aa89fda8a4508fb8448890bc447349c53cb771740e3fbed550512111009960466ef2412d284436d89155e397c10ef823a283e04f7eb5cf957c9e31"/>
                            <img className="screensho_img" src="https://1.bp.blogspot.com/-aeq83FvNlBQ/YMOxAytFTCI/AAAAAAAB7LQ/JhLq0QpohMIi2nRDllgO4AzWa4vPaMdlACLcBGAsYHQ/w640-h360/Screen13.jpg"/>
                            <img className="screensho_img" src="https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-g1c-01-1920x1080-f558c92d50b2.jpg?h=720&resize=1&w=1280"/>
                            <img className="screensho_img" src="https://static.marriedgames.com.br/9a029e00-111.jpg"/>
                            <img className="screensho_img" src="http://www.gameinsight.co.kr/news/photo/202201/23969_61244_259.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }
  export default GameInfo;