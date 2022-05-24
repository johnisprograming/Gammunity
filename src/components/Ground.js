import React from 'react';
import styled from "styled-components";
import './games/detail-view.css'
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
    url(https://yt3.ggpht.com/ytc/AKedOLR3yTf_s8tUR21Rv_7Jlc-P_Btn4FRDFeTcilMOmA=s900-c-k-c0x00ffffff-no-rj);
  background-size: cover;
`;
const Ground = () => {
    return (
        <div>
            <Container>
            <div className='home_header'>
                    <a href="/"><img className="logo" alt="logo" src="/img/logo.png"/></a>
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
                                <a href="https://yt3.ggpht.com/ytc/AKedOLR3yTf_s8tUR21Rv_7Jlc-P_Btn4FRDFeTcilMOmA=s900-c-k-c0x00ffffff-no-rj"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://yt3.ggpht.com/ytc/AKedOLR3yTf_s8tUR21Rv_7Jlc-P_Btn4FRDFeTcilMOmA=s900-c-k-c0x00ffffff-no-rj"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>배틀그라운드</strong>
                                    <p className="title_p">BATTLE GROUND</p>
                                </div>

                                <div className="spec">
                                    <dl>
                                        <dt>플랫폼 :&nbsp;</dt>
                                        <dd>
                                            온라인
                                        </dd>
                                        <dt>장르 :&nbsp;</dt>
                                        <dd>
                                            FPS
                                        </dd>
                                        <dt>개발사 :&nbsp;</dt>
                                        <dd>
                                            <a className="spec_link" href="https://www.krafton.com/studios/pubg/">PUBG</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            
                                        (주)카카오게임즈, 크래프톤
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                            15세이용가,청소년 이용불가 
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2017.12.21</dd>
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
                            배틀그라운드는 최대 100명의 플레이어가 배틀로얄 형태로 싸우는 PVP 슈팅 게임으로,
                 마지막까지 생존한 1인이나 팀이 되면 승리하게 된다.
                  배틀그라운드에서 지도상의 수송기의 이동 경로는 각 라운드마다 달라지며 
                  플레이어는 원하는 지점에 낙하산으로 착륙하기 위한 최적의 거리와 시간을 결정해야 한다.
                   플레이어는 게임플레이에 영향을 미치지 않는 의상까지만 커스터마이즈가 가능하고 무기가 없는 맨몸으로 시작한다.
                    착륙을 하면 플레이어는 건물, 유령 도시, 기타 지역을 뒤져서 총기, 차량, 근접무기, 방어구, 투척무기, 의료품 등장비를 찾을 수 있고,
                     자기장이 줄어들때 수송기가 보급품을 떨어뜨리고 보급품에는 건물, 유령도시에는 없는 특별한 총기가 있다. 
                     이 아이템들로 교전해 최후의 1인이나 팀이 되면 승리한다
                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/VAXvyu_2zl0"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowfullscreen>
                              </iframe>
                              <iframe width="560" height="315"
                               src="https://www.youtube.com/embed/FaTvnb4C9rg" 
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
                            <img className="screensho_img" src="https://cdn.gamemeca.com/gmdata/0001/631/105/408970_%EB%B0%B0%EA%B7%B8%EA%B2%BD%EC%9F%81%EC%A0%84_%EC%A0%9C%EA%B3%B502.jpg"/>
                            <img className="screensho_img" src="https://t1.kakaocdn.net/gamepub/pub-img/pubg/top_background/154892128299435-%EC%88%98%EC%A0%95%EB%90%A8_OB_Kill_Team.jpg"/>
                            <img className="screensho_img" src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2017070718000500101a8b5e7c93c12114162187.jpg"/>
                            <img className="screensho_img" src="http://www.sisaweek.com/news/photo/201801/101606_82530_529.jpg"/>
                            <img className="screensho_img" src="https://dimg.donga.com/wps/NEWS/IMAGE/2017/08/22/85925019.1.png"/>
                            <img className="screensho_img" src="https://t1.daumcdn.net/cfile/tistory/99067D365D76129935"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }

export default Ground;