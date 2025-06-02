import "../css/rules.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Rules(){
    return (
        <div className="container">
            <div className="rulesPage">
                <Link to="/help">
                    <div className="backBtn">
                        <FontAwesomeIcon id="backBtnLeftArrowIcon" icon={faChevronLeft} />
                        <p>Back</p>
                    </div>
                </Link>
                <h1>Rules</h1>
                <div className="rulesDiv">
                    <h3>Choosing a Category</h3>
                    <ul>
                        <li>You will have 8 categories to choose from.</li>
                        <li>Once you choose a category, you'll be given different questions to answer based on that category.</li>
                        <li>You will have a set number of lives and a time limit to answer each question.</li>
                    </ul>
                    <h3>Points</h3>
                    <ul>
                        <li>For each question you get right, you will be given a number of points based on how 
                            much time you have left and your current streak.</li>
                        <li>As you answer questions correctly consecutively, you will develop a streak that will help you 
                            gain points faster.</li>
                        <li>The points you gain will double after answering 5 questions right in a row.</li>
                        <li>The points you gain will triple after answering 10 questions right in a row.</li>
                        <li>Your streak is broken and your points multiplier resets once you answer a question wrong.</li>
                        <li>Your points will be accumulated as you answer more and more questions right.</li>
                    </ul>
                    <h3>Lives</h3>
                    <ul>
                        <li>If you get a question wrong or fail to answer a question within the time limit, you will lose a life.</li>
                        <li>After you lose all lives, the round is over and your final points will be displayed.</li>
                    </ul>
                    <h3>Game Settings</h3>
                    <ul>
                        <li>You are given the option to play the game in easy, normal, or hard mode (can be changed in settings).</li>
                        <li>Easy mode gives you 5 lives for each round, normal mode gives you 3 lives, and hard mode gives you 
                            only 1 life.</li>
                        <li>The game speed can also be modified in settings.</li>
                        <li>The game speed determines the time limit for each question.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Rules;