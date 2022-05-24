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
    url(https://wallpaperaccess.com/full/4817104.jpg);
  background-size: cover;
`;

function FIFA4() {
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
                                <a href="https://i.ytimg.com/vi/OJpQY5Bz7kg/maxresdefault.jpg"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://i.ytimg.com/vi/OJpQY5Bz7kg/maxresdefault.jpg"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>피파 온라인 4</strong>
                                    <p className="title_p">FIFA ONLINE 4</p>
                                </div>

                                <div className="spec">
                                    <dl>
                                        <dt>플랫폼 :&nbsp;</dt>
                                        <dd>
                                            온라인
                                        </dd>
                                        <dt>장르 :&nbsp;</dt>
                                        <dd>
                                            스포츠
                                        </dd>
                                        <dt>개발사 :&nbsp;</dt>
                                        <dd>
                                            <a className="spec_link" href="https://www.ea.com/ko-kr/ea-studios/ea-korea">EA코리아 스튜디오</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            넥슨
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                            전체
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2018.05.17</dd>
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
                                피파 온라인 4’는 패키지 게임 ‘피파 18’ 그래픽과 애니메이션 요소, ‘피파 17’의 게임 플레이 및 AI 엔진을 기반으로 PC 온라인 환경에 최적화했다. 
                                여기에 선수 개인기, 세트피스, 볼 움직임, 향상된 AI, 정교한 수비 시스템 등을 통해 더욱 전략적인 플레이를 즐길 수 있게 되었다.
                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/iyo1E1HCOCU?controls=0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                            <iframe width="530" height="315" 
                            src="https://www.youtube.com/embed/O49ISYAACRo?controls=0" 
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
                            <img className="screensho_img" src="https://image.fmkorea.com/files/attach/new/20171102/486616/47592066/824097497/0c74ad9ec2bc018422700a873ec5829f.png"/>
                            <img className="screensho_img" src="https://image.fmkorea.com/files/attach/new/20171102/486616/47592066/824097497/b986a1beb1c8d2ed3cf2b654b6f2346c.png"/>
                            <img className="screensho_img" src="https://image.fmkorea.com/files/attach/new/20171102/486616/47592066/824097497/bed62e933d52a428966bb9544befad47.png"/>
                            <img className="screensho_img" src="https://image.fmkorea.com/files/attach/new/20171102/486616/47592066/824097497/fd6234f408187259f577cde220a849c2.png"/>
                            <img className="screensho_img" src="https://i.ytimg.com/vi/ivpK06Td_O8/maxresdefault.jpg"/>
                            <img className="screensho_img" src="https://image.fmkorea.com/files/attach/new/20171214/5665468/601760781/867540990/f6e1f06d60d727baf5099fe2614c6f6c.png"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }
  export default FIFA4;