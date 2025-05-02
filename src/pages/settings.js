import "../css/settings.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Settings(){
    return (
        <div className="container">
            <div className="settingsPage">
                <Link to="/">
                    <div className="backBtn">
                        <FontAwesomeIcon id="backBtnLeftArrowIcon" icon={faChevronLeft} />
                        <p>Back</p>
                    </div>
                </Link>
                <h1>Settings</h1>
                <div className="settingsDiv">
                    <div className="difficulty">
                        <h4 className="difficultyLabel">Difficulty</h4>
                        <div className="setOpts difficultyOptions">
                            <div className="easyOption"><p>EASY</p></div>
                            <div className="normalOption"><p>NORMAL</p></div>
                            <div className="hardOption"><p>HARD</p></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="gameSpeed">
                        <h4 className="gameSpeedLabel">Game Speed</h4>
                        <div className="setOpts gameSpeedOptions">
                            <div className="fastOption"><p>10 SEC</p></div>
                            <div className="mediumOption"><p>15 SEC</p></div>
                            <div className="slowOption"><p>20 SEC</p></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="theme">
                        <h4 className="themeLabel">Theme</h4>
                        <div className="setOpts themeOptions">
                            <div className="lightOption"><p>Light</p></div>
                            <div className="darkOption"><p>Dark</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;