import "../css/stats.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Stats(){
    return (
        <div className="container">
            <div className="statsPage">
                <Link to="/">
                    <div className="backBtn">
                        <FontAwesomeIcon id="backBtnLeftArrowIcon" icon={faChevronLeft} />
                        <p>Back</p>
                    </div>
                </Link>
                <h1>Stats</h1>
                <div className="categoryStats">
                    <div className="cs generalStats">
                        <header className="generalHeader">
                            <h4>General</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs artStats">
                        <header className="artHeader">
                            <h4>Art</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs scienceStats">
                        <header className="scienceHeader">
                            <h4>Science</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs geographyStats">
                        <header className="geographyHeader">
                            <h4>Geography</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs historyStats">
                        <header className="historyHeader">
                            <h4>History</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs entertainmentStats">
                        <header className="entertainmentHeader">
                            <h4>Entertainment</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs mathStats">
                        <header className="mathHeader">
                            <h4>Math</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>

                    <div className="cs sportsStats">
                        <header className="sportsHeader">
                            <h4>Sports</h4>
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">0</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;