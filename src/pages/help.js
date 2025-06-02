import "../css/help.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Help(){
    return (
        <div className="container">
            <div className="helpPage">
                <Link to="/">
                    <div className="backBtn">
                        <FontAwesomeIcon id="backBtnLeftArrowIcon" icon={faChevronLeft} />
                        <p>Back</p>
                    </div>
                </Link>
                <h1>Help</h1>
                <div className="helpDiv">
                    <p className="helpDivHeading">Welcome to Trivia Rush!</p>
                    <p className="gameDesc">
                        Test your knowledge in eight different categories. Set high scores, beat your highest streaks, 
                        and have fun!
                    </p>
                    <p className="rulesSec">
                        The rules for this trivia game are quite simple. Click&nbsp;
                        <Link to="/rules">
                            <span className="rulesLink">here</span>
                        </Link>
                        &nbsp;to review the rules and learn how your points are accumulated as you play.
                    </p>
                    <p className="helpDivClosing">Thanks for playing!</p>
                </div>
            </div>
        </div>
    );
}

export default Help;