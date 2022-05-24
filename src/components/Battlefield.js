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
    url(https://i.ytimg.com/vi/eu1XCy9YxyI/maxresdefault.jpg);
  background-size: cover;
`;
const battlefield = ({game}) => {
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
                                <a href="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72"
                                    title="포스터 크게 보기" target="_blank">
                                    <span className="thumb_image">
                                        <img className="box-image"
                                            src="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72"
                                            alt="포스터 새창"/>
                                    </span>
                                </a>
                            </div>

                            <div className="box_contents">
                                <div className="title">
                                    <strong>배틀필드 2042</strong>
                                    <p className="title_p">BATTLE FIELD</p>
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
                                            <a className="spec_link" href="https://www.dice.se/">다이스</a>
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
                                        <dd className="on">2021.11.19</dd>
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
                            <p className="p_story" >
                            이번 타이틀은 싱글/협동 플레이 기반 캠페인이 존재하지 않고 멀티플레이어 기반의 요소들만 존재한다. 스토리 요소는 배틀 패스 시즌 진행 및 게임 외적 콘텐츠로 전개될 예정이다. 모든 플랫폼에서 진척도 및 구매 내역이 공유되며[28], 동세대 콘솔간 크로스플레이를 지원한다.[29]

메인 시리즈로 배틀필드 2142 이후 15년 만에 AI가 돌아온다.[30] 봇은 올아웃 워페어(컨퀘스트, 브레이크스루)에서 빈 슬롯에 채워지다가 플레이어 인원수가 채워지는 만큼 봇도 사라진다. 솔로 또는 분대원만 포함된 게임을 만들어 자신과 분대원을 제외한 모든 슬롯을 봇으로 채울 수도 있어 과거 시리즈처럼 봇전 기반 싱글 플레이도 즐길 수 있고, 봇이 포함된 게임에서도 장비 해제 및 경험치 획득 등의 진척도 관련 활동을 할 수 있다. 봇을 임의로 해제할 수는 없다.[31] 전작들과 달리 게임 실행에 상시 온라인 연결을 요구하기에 봇전을 포함한 오프라인 플레이는 원천적으로 불가능하다.[32]

배틀필드 4에서 도입된 대규모 맵 변화 요소인 'Levolution'이 새로운 방식으로 재도입되었다. 궤도 맵을 예로 들면, 폭풍우가 치는 날씨 효과에 레볼루션으로 천재인 토네이도가 발생하고 인재로 로켓이 발사되거나 파괴되어 거점 하나가 초토화 되는 등 맵과 분위기를 한층 더 다이나믹하게 만들어주는 다양한 요소들이 존재한다.
스페셜리스트, 무기, 탑승 장비, 보조 장비의 경우 장비 별로 '전문 단계(Mastery Level)'가 존재한다. 전문 단계는 각 장비마다 특정 활동[33]을 완수하여 올릴 수 있으며, 최대 40까지 올릴 수 있다. 많은 부착물 및 스킨 해금이 전문 단계와 연계되어 있으며, 전문 단계 40에 도달한 경우 공통적으로 검정/빨강 조합의 '티어 1' 스킨을 획득할 수 있다.

배틀필드 V와 마찬가지로 게임 중 팀 변경은 불가능하며, 반드시 하나의 분대에 소속되어야 한다. 다만 특정한 분대로 들어가거나 새로운 분대를 만들 수 있었던 전작들과 달리 본작에서는 자리가 빈 무작위 분대로만 들어갈 수 있다. 때문에 친구와 분대플레이를 하기 위해선 게임 참가전에 분대 사전 생성을 해야한다.

                            </p>
                        </div>
                    </div>
                    
                    <div className="game_info_box">
                        <div className="heading">
                            <h5 className="infotitle">동영상</h5>
                        </div>
                        <div className="game_videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TsKvSC_A_5o" 
                        title="YouTube video player"
                         frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen>

                          </iframe>
                             <iframe width="560" height="315" src="https://www.youtube.com/embed/vZ4dOb3PXlg" 
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
                            <img className="screensho_img" src="https://i.ytimg.com/vi/eu1XCy9YxyI/maxresdefault.jpg"/>
                            <img className="screensho_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCsMAhse4tM-0P9BWSViOFe8IL5LxxWRAhQ&usqp=CAU"/>
                            <img className="screensho_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmTiENwDlbrYqVa1ydVditMkmVkmij_0qqA&usqp=CAU"/>
                            <img className="screensho_img" src="https://dcimg4.dcinside.co.kr/viewimage.php?id=2fbcd674b5866a&no=24b0d769e1d32ca73feb85fa11d02831b3f3a5b77d2b2273808df9809cbf3b5b554646860e4fd810988e0eaa29f4e19167c1bb77c8d4553471a55269d9f11e65df2f"/>
                            <img className="screensho_img" src="https://itcm.co.kr/files/attach/images/813/159/581/009/62fc3d44817342bd53b38a4f67ae7323.jpg"/>
                            <img className="screensho_img" src="https://dcimg4.dcinside.co.kr/viewimage.php?id=2fbcd674b5866a&no=24b0d769e1d32ca73feb85fa11d02831b3f3a5b77d2b2273808df9809cbf3b5b554646860e4fd810988e0eaa29f4e19167c1bb77c8d4596726f5516e8fa71e65f7dc"/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }
export default battlefield;