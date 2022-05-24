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
    url(https://www.theguru.co.kr/data/photos/20210102/art_16105054711663_bb68e7.jpg);
  background-size: cover;
`;
const Valorant = ({game}) => {
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
                                <a href="https://post-phinf.pstatic.net/MjAyMDA2MDJfMTcz/MDAxNTkxMTAzNzQ4NzU3.vW22HTXpkYkfp1B2Nc1dkeDjiJLIKtUhBTAenmPlHZYg.jjXCeA7PGsHjD81cynrf6nhYRxGTg4v6KhO-R2dH9tAg.JPEG/VALORANT_Jett_Type_%EB%B3%B5%EC%82%AC.jpg?type=w1200"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://post-phinf.pstatic.net/MjAyMDA2MDJfMTcz/MDAxNTkxMTAzNzQ4NzU3.vW22HTXpkYkfp1B2Nc1dkeDjiJLIKtUhBTAenmPlHZYg.jjXCeA7PGsHjD81cynrf6nhYRxGTg4v6KhO-R2dH9tAg.JPEG/VALORANT_Jett_Type_%EB%B3%B5%EC%82%AC.jpg?type=w1200"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>발로란트</strong>
                                    <p className="title_p">VALORANT</p>
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
                                            <a className="spec_link" href="https://www.riotgames.com/ko">라이엇 게임즈</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            
                                        라이엇 게임즈
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                        15세이상 이용가
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2020.06.02</dd>
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
                            기본적으로 CS:GO과 동일한 시스템[18]에 오버워치처럼 다른 능력을 지닌 요원을 추가했다 하지만 오버워치와는 다르게 대부분의 스킬은 적을 잡는 것을 도와주는데에 초점이 맞춰져 있고 스킬 단독으로는 적을 잡기 매우 어렵다.[19] 또한 체력도 모든 요원이 100으로 통일되어있는데 반해 총기의 대미지는 상당히 높아[20] 교전이 상당히 짧은 편이다. 게다가 힐링 스킬은 일부 요원만 가지고 있는데다 아군을 힐링하는 스킬은 세이지의 회복구슬과 스카이의 재생 단 두개뿐이다.

위 특징때문에 발로란트는 소위 "총만 잘 쏘면 홀로 캐리가 가능한 게임"중 하나이다. 스킬을 전혀 사용하지 않아도 교전에는 큰 문제가 없는데다 그 스킬들도 적들의 위치를 단편적으로 보여주거나 연막을 치는 등 당장 눈 앞의 적을 잡는 데에는 쓸모가 없는 스킬이 대부분이다. 궁극기와 스킬 연계가 중요한 오버워치와는 사뭇 다른 양상을 띤다. 당장 발로란트 유튜버들만 봐도 에찍누로 이기는 모습이 종종 보인다.

다만 스킬의 비중이 그닥 적은 게임이라 할수도 없다. 연막과 시야 확보는 레인보우 식스 시즈에서의 선례가 그렇듯 교전이 짧은 FPS에선 존재만 한다면 게임의 판도를 뒤집는 상황이 나오기도 하며 스킬들에 달려 있는 강력한 CC기나 딜은 실력과 관계없이 본인이 우위를 점하기 쉽게 만들어준다. 따라서 캐쥬얼해 보이지만 에임과 스킬 활용 모두 받쳐줘야 하는 나름 진입 장벽이 있는 게임.

                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4bv_qjqvWtU" 
                        title="YouTube video player"
                         frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen>

                         </iframe>
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/-0jtPFVgwf4" 
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
                            <img className="screensho_img" src="https://images.khan.co.kr/article/2020/06/15/l_2020060802000322400064042.jpg"/>
                            <img className="screensho_img" src="https://cdn.daily.hankooki.com/news/photo/202003/20200302_2_bodyimg_645490.jpg"/>
                            <img className="screensho_img" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDJfOTQg/MDAxNTgzMTA4Mjc2MDk4.esXiJCPf95jBwzq2bgAYnGLB9hDVAZeypGTUMnsGqcIg.yabXVNkLnQGfR0lSI7EHJxXv3-GAEqNcPdGKEOpGqeMg.JPEG.yui050505/fps10.jpg?type=w800"/>
                            <img className="screensho_img" src="https://hafkztnqhdwa5736843.cdn.ntruss.com/data2/content/image/2020/06/05/.cache/512/20200605220059.jpg"/>
                            <img className="screensho_img" src="https://sm.ign.com/t/ign_kr/screenshot/a/a-gameplay/a-gameplay-screenshot-of-from-valorants-closed-beta_4jtj.1080.jpg"/>
                            <img className="screensho_img" src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt64d48a164ccbd10b/5f80e0786ffd1b42dc429e0e/Battlepass_Ep1_Act3_Trailer_Banner.jpg?auto=webp&disable=upscale&height=549"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }

export default Valorant;