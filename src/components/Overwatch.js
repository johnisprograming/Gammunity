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
    url(http://www.sisajournal-e.com/news/photo/first/201801/img_178856_1.png);
  background-size: cover;
`;
const Overwatch = ({game}) => {
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
                                <a href="http://www.sisajournal-e.com/news/photo/first/201801/img_178856_1.png"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="http://www.sisajournal-e.com/news/photo/first/201801/img_178856_1.png"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>오버워치</strong>
                                    <p className="title_p">OVERWATCH</p>
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
                                            <a className="spec_link" href="https://www.blizzard.com/ko-kr/">블리자드 엔터테인먼트</a>
                                        </dd>
                                        <dt>제공업체 :&nbsp;</dt>
                                        <dd>
                                            
                                        블리자드 엔터테인먼트
                                        </dd>
                                        <dt>이용등급 :&nbsp;</dt>
                                        <dd>
                                        12세 이용가, 15세 이용가
                                        </dd>
                                        <dt>출시년도 :&nbsp;</dt>
                                        <dd className="on">2016.05.24</dd>
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
                            게임 모드로는 빠른 대전, 아케이드, 경쟁전, 게임 탐색기, 인공지능 상대, 체험 모드가 있다. 
            게임탐색기를 제외하고 모드마다 각각의 영웅별 플레이 시간이 누적되어 차트에 남음으로 경기 중 다른 팀원이 프로필을 통해 확인할 수 있다. 아케이드는 결투(진검승부), 섬멸전(승자 제외 섬멸전, 6 대 6 승자 제외 섬멸전), 수수께끼의 영웅, 깃발 뺏기가 기록된다.
            2018년 6월 30일자 패치로 프로필의 공개/친구 공개/비공개 여부를 설정할 수 있게 되었다.
2018년 6월 27일 패치로 '그룹 찾기' 기능이 추가 되었다. 게임방을 만들고 팀원들을 받는 게 아닌 그룹을 만들고 게임에 대기 타는 방법. 이런 방법으로 게임을 시작하기 전에 조합을 맞추어 갈 수 있다. 6개의 슬롯을 그룹 리더의 임의대로 정할 수 있다. 역할은 돌격, 공격, 지원, 플렉스 네 가지로 지정할 수 있다. 2-2-2(딜/플렉스)가 대세이며 가끔은 6플렉스 또는 3-3 조합도 있다. 빠대나, 아케이드, 경쟁전뿐만 아니라, 아무거나라고 대기할 수 있으며 필요한 대로 고르면 된다. 이런 식으로 하면서 팀보의 여부나 조합을 미리 확인하고 가기 때문에 대체로 경기 분위기를 좋게 만들고 또한 상대도 같은 수의 6인큐를 만나기 때문에 경기의 질이 좋아질 수 있다. 
티어를 올리고 싶다면 솔큐보다는 이런식으로 다인큐를 돌리는 것도 좋은 방법이 될 수 있겠다.
2020년 2월 26일 패치로 '체험 모드'가 추가 되었다. 체험 모드에서는 새로운 밸런스 업데이트, 규칙, 게임 모드 등을 체험해볼 수 있다. 체험 모드에서의 변경점은 파격적이지만 유저들의 반응을 미리보기 위한 일종의 실험적인 것들이 대부분이며 체험이 종료된 후 체험 모드에서 변경되었던 사항들이 사후에 업데이트 되지 않을 수도 있다. 그 이후 대부분의 성능패치는 체험모드를 통해 미리 공개되고 있다.
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
                            <img className="screensho_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV2NWHKTmNIB5ZjUyN4t0HdD2jpahO-U-Fw&usqp=CAU"/>
                            <img className="screensho_img" src="http://itcm.co.kr/files/attach/images/813/888/084/001/3535808a2698b4289ca85037031d14a9.jpg"/>
                            <img className="screensho_img" src="https://i3.ruliweb.com/thumb/19/09/05/16cffc2b4721af092.png"/>
                            <img className="screensho_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViEwcolsWkLO7YCDXit-Tem0JQnsv5djq2A&usqp=CAU"/>
                            <img className="screensho_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQFBKSC_6biVx_9df12lyr1N1f3dXP4X9ku7lna3KEoBfTA-YgcGftBqvcDKywSu3yZ0&usqp=CAU"/>
                            <img className="screensho_img" src="https://bnetcmsus-a.akamaihd.net/cms/gallery/mq/MQ6PZDN38UA11558575962181.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }

export default Overwatch;