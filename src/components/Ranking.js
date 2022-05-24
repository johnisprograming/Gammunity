import React from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import "./Ranking.css"


const Ranking = () => {

    $(function() {
        var count = $('#rank-list li').length;
        var height = $('#rank-list li').height();
    
        function step(index) {
            $('#rank-list ol').delay(2000).animate({
                top: -height * index,
            }, 800, function() {
                step((index + 1) % count);
            });
        }
    
        step(1);
        
    });
        
    return (
        <div className="rank_box">
            <h1 className="rank_title">인기게임 순위</h1>
            <div id="content">
                <dl id="rank-list">
                    <dd>
                        <ol>
                            <li>
                                <img className="gameImage" alt="game_01" src="img/Ranking_img/1.jpg" />
                                <p className="gametitle" href="#"><Link to="/LOL">1. 리그 오브 레전드</Link></p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_02" src="img/Ranking_img/2.jpg" />
                                <p className="gametitle" href="#"><Link to="/LOSTARK">2. 로스트아크</Link></p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_03" src="img/Ranking_img/3.jpg" />
                                <p className="gametitle" href="#"><Link to="/FIFA4">3. 피파 온라인 4</Link></p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_04" src="img/Ranking_img/4.jpg" />
                                <p  className="gametitle" href="#">4. 플레이어언노운스 배틀그라운드</p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_05" src="img/Ranking_img/5.jpg" />
                                <p className="gametitle" href="#">5. 서든어택</p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_06" src="img/Ranking_img/6.jpg" />
                                <p className="gametitle" href="#">6. 발로란트</p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_07" src="img/Ranking_img/7.jpg" />
                                <p className="gametitle" href="#">7. 오버워치</p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_08" src="img/Ranking_img/8.jpg" />
                                <p className="gametitle" href="#">8. 메이플스토리</p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_09" src="img/Ranking_img/9.jpg" />
                                <p className="gametitle" href="#">9. 스타크래프트</p>
                            </li>
                            <li>
                                <img className="gameImage" alt="game_10" src="img/Ranking_img/10.jpg" />
                                <p className="gametitle" href="#">10. 아이온: 영원의 탑</p>
                            </li>
                        </ol>
                    </dd>
                </dl>
            </div>
        </div>
    );
}
export default Ranking