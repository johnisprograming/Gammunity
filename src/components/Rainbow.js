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
    url(https://w.namu.la/s/f2d3d8a2ebcf1f7bcee93826275d0d885f3ee09aedfbdf6dfa7b5de41968e5517cba666a43d0324ba38953e0b163705eb08bb2e7b29c61dd7e76541720c68a441d85adce979f7a33a06a21020035156ebe43aba6d5f5cca62148440139eb58a5);
  background-size: cover;
`;
const Rainbow = ({game}) => {
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
                                <a href="https://w.namu.la/s/f2d3d8a2ebcf1f7bcee93826275d0d885f3ee09aedfbdf6dfa7b5de41968e5517cba666a43d0324ba38953e0b163705eb08bb2e7b29c61dd7e76541720c68a441d85adce979f7a33a06a21020035156ebe43aba6d5f5cca62148440139eb58a5"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://w.namu.la/s/f2d3d8a2ebcf1f7bcee93826275d0d885f3ee09aedfbdf6dfa7b5de41968e5517cba666a43d0324ba38953e0b163705eb08bb2e7b29c61dd7e76541720c68a441d85adce979f7a33a06a21020035156ebe43aba6d5f5cca62148440139eb58a5"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>레인보우 식스 시즈</strong>
                                    <p className="title_p">RAINBOW SIX SIEGE</p>
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
                                            <a className="spec_link" href="https://montreal.ubisoft.com/en/">유비소프트 몬트리올</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            
                                        유비소프트 엔터테인먼트 S.A.
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                        청소년 이용불가 
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2015.12.01</dd>
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
                            레인보우 식스 시즈는 유비소프트에서 2015년 12월 1일 스팀 판매를 개시했으며 레인보우 식스의 후속작이다.
             FPS 장르의 비디오 게임이다. 2015년 12월 1일, 마이크로소프트 윈도우, 플레이스테이션 4, 엑스박스 원용으로 전 세계에 출시되었다.
              이 게임은 플레이어 간 협업에 초점을 두고 있다
                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/eyQGcYUOiUc" 
                        title="YouTube video player"
                         frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen>

                          </iframe>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/WQeWzbmmNDA" 
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
                            <img className="screensho_img" src="http://itcm.co.kr/files/attach/images/813/394/561/2c26ec69b4817d1bfbe7fd98503c7ca5.jpg"/>
                            <img className="screensho_img" src="https://itcm.co.kr/files/attach/images/813/281/407/2c92e7f774ae7c4242d833778e4d4e5f.jpg"/>
                            <img className="screensho_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdDTWiUeB1BvNe08Yk-OlnUxGd3_qbdq2bfodIl2ZPzSO0T7zZ3M2GeiFPGql-_Nrn7E&usqp=CAU"/>
                            <img className="screensho_img" src="https://image.zdnet.co.kr/2015/07/30/tEscPlo9wtDM6NdypjnC.jpg"/>
                            <img className="screensho_img" src="https://itcm.co.kr/files/attach/images/813/394/561/db10f0b0098054c5e0f15156af6708a6.jpg"/>
                            <img className="screensho_img" src="https://itcm.co.kr/files/attach/images/813/281/407/821458908b5f4ecb1817d1be9ef9a300.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }

export default Rainbow;