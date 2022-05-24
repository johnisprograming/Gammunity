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
    url(https://sm.ign.com/ign_kr/cover/a/apex-legen/apex-legends_a8bx.jpg);
  background-size: cover;
`;
const Apex = ({game}) => {
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
                                <a href="https://sm.ign.com/ign_kr/cover/a/apex-legen/apex-legends_a8bx.jpg"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://sm.ign.com/ign_kr/cover/a/apex-legen/apex-legends_a8bx.jpg"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>에이팩스 레전드</strong>
                                    <p className="title_p">APEX LEGEND</p>
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
                                            <a className="spec_link" href="https://www.respawn.com/">리스폰 엔터테인먼트</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            
                                        일렉트로닉 아츠
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                        청소년 이용불가
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2019.02.05</dd>
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
                            타이탄폴 시리즈의 개발사 리스폰 엔터테인먼트에서 개발, 일렉트로닉 아츠가 유통하는 배틀로얄 게임. 타이탄폴 시리즈와 세계관을 공유하며, 자막/음성 모두 한국어를 지원한다.

2019년 2월 5일 발표와 동시에 PC · 콘솔에 출시되었다. 당시 유행을 타고 수많은 양산형 배틀로얄 게임들이 출시되어 난립하느라 장르에 대한 부정적인 인식이 생기고 있었는데, 이를 타파하기 위해 이런 마케팅을 취했다고 한다. 부분유료로 서비스되어 게임 본편은 별도의 구매 없이 무료로 플레이할 수 있다.

PC의 경우 본래 EA 오리진 플랫폼 독점으로 운영되었으나, 2020년 11월 4일 시즌 7 시작과 함께 Steam에 출시되며 크로스 플랫폼이 개시되었다. 특이한 점은 스팀 버전은 실행에 오리진 클라이언트를 요구하지 않는다는 것. Steam 단독으로 게임 실행이 가능하며, 스팀 버전으로 이동하는 사람은 스팀을 설치한 다음 오리진 버전과 오리진 플랫폼을 삭제해도 플레이에 문제가 없다. 다만 오리진 계정을 이용해야 접속이 가능하기에 신규 유저들은 먼저 오리진 홈페이지에서 아이디를 개설해야 하며, 기존 유저들은 오리진 계정을 스팀 버전과 연동시켜야 한다.

콘솔 기기로는 8세대 콘솔인 PS4, Xbox One이며 9세대 콘솔인 PS5와 Xbox Series X|S에선 하위호환으로 플레이할 수 있으며, 2021년 3월 9일(한국 시각 10일)부터 닌텐도 스위치에서도 플레이할 수 있다
                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                        <iframe width="560" height="315"
                         src="https://www.youtube.com/embed/GMLECLmSLds" 
                        title="YouTube video player" 
                        frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen>
                         </iframe>
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/cY5tJ4uGD18" 
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
                            <img className="screensho_img" src="https://t1.daumcdn.net/cfile/tistory/9986934F5C5BEC230C"/>
                            <img className="screensho_img" src="https://t1.daumcdn.net/cfile/tistory/9990CF4F5C5BEC2401"/>
                            <img className="screensho_img" src="https://blueframe.co.kr/data/file/article07/3696014431_GSsvZoN8_dfa01e5966bf1af382b3d38f6eb04859bbb7d571.jpg"/>
                            <img className="screensho_img" src="https://www.ilovepc.co.kr/news/photo/201905/22462_48748_3727.jpg"/>
                            <img className="screensho_img" src="https://ichi.pro/assets/images/max/724/0*NXm-rdcGrFXQrY5W.png"/>
                            <img className="screensho_img" src="https://t1.daumcdn.net/cfile/tistory/9986934F5C5BEC230C"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }

export default Apex;