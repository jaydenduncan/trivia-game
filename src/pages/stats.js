import "../css/stats.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/fontawesome-free-solid";

function Stats(){
    const [stats, setStats] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    const [maxCategories, setMaxCategories] = useState(new Set());

    const getStats = async () => {
        await fetch('/stats')
        .then(res => res.json())
        .then(data => setStats(data))
        .catch(err => console.log(err));
    };

    const getMaxCategories = async () => {
        await fetch('/stats/maxGamesPlayed')
        .then(res => res.json())
        .then(data => {
            let result = new Set();

            for(let i=0; i<data.length; i++){
                result.add(data[i]["categoryId"] - 1);
            }

            setMaxCategories(result);
        })
        .catch(err => console.log(err));
    };

    const displayFavIcons = () => {
        let favoriteIcons = document.getElementsByClassName("favoriteIcon");

        for(let i=0; i<favoriteIcons.length; i++){
            if(!maxCategories.has(i)){
                favoriteIcons[i].style.display = "none";
            }
            else{
                favoriteIcons[i].style.display = "";
            }
        }
    };

    useEffect(() => {
        getStats();
        getMaxCategories();
    }, []);

    useEffect(() => {
        console.log(stats);
    }, [stats]);

    useEffect(() => {
        console.log(maxCategories);
        displayFavIcons();
    }, [maxCategories]);

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
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[0].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[0].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[0].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs artStats">
                        <header className="artHeader">
                            <h4>Art</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[1].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[1].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[1].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs scienceStats">
                        <header className="scienceHeader">
                            <h4>Science</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[2].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[2].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[2].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs geographyStats">
                        <header className="geographyHeader">
                            <h4>Geography</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[3].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[3].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[3].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs historyStats">
                        <header className="historyHeader">
                            <h4>History</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[4].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[4].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[4].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs entertainmentStats">
                        <header className="entertainmentHeader">
                            <h4>Entertainment</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[5].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[5].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[5].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs mathStats">
                        <header className="mathHeader">
                            <h4>Math</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[6].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[6].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[6].longest_streak || 0}</p>
                        </div>
                    </div>

                    <div className="cs sportsStats">
                        <header className="sportsHeader">
                            <h4>Sports</h4>
                            <FontAwesomeIcon className="favoriteIcon" icon={faStar} />
                        </header>
                        <hr className="headerSep"/>
                        <div className="statsSec gamesPlayedSec">
                            <p className="statsLabel gamesPlayedLabel">Games Played</p>
                            <p className="statsNum gamesPlayedNum">{stats[7].games_played || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec highScoreSec">
                            <p className="statsLabel highScoreLabel">High Score</p>
                            <p className="statsNum highScoreNum">{stats[7].high_score || 0}</p>
                        </div>
                        <hr/>
                        <div className="statsSec longestStreakSec">
                            <p className="statsLabel longestStreakLabel">Longest Streak</p>
                            <p className="statsNum longestStreakNum">{stats[7].longest_streak || 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;