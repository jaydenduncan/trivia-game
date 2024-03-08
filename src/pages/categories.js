import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faT } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/fontawesome-free-solid";
import { faFlask } from "@fortawesome/fontawesome-free-solid";
import { faGlobe } from "@fortawesome/fontawesome-free-solid";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faFootball } from "@fortawesome/free-solid-svg-icons";

function Categories(){
    return (
        <div className="container">
            <div className="heading">
                <h1>Categories</h1>
            </div>

            <div className="categories">
                <div className="generalCategory">
                    <FontAwesomeIcon className="catIcon" id="brainIcon" icon={faBrain} />
                    <p className="title">General</p>
                </div>
                <div className="artCategory">
                    <FontAwesomeIcon className="catIcon" id="artIcon" icon={faPaintBrush} />
                    <p className="title">Art</p>
                </div>
                <div className="scienceCategory">
                    <FontAwesomeIcon className="catIcon" id="scienceIcon" icon={faFlask} />
                    <p className="title">Science</p>
                </div>
                <div className="geographyCategory">
                    <FontAwesomeIcon className="catIcon" id="geographyIcon" icon={faGlobe} />
                    <p className="title">Geography</p>
                </div>
                <div className="historyCategory">
                    <FontAwesomeIcon className="catIcon" id="historyIcon" icon={faScroll} />
                    <p className="title">History</p>
                </div>
                <div className="entertainmentCategory">
                    <FontAwesomeIcon className="catIcon" id="entertainmentIcon" icon={faTv} />
                    <p className="title">Entertainment</p>
                </div>
                <div className="mathCategory">
                    <FontAwesomeIcon className="catIcon" id="mathIcon" icon={faCalculator} />
                    <p className="title">Math</p>
                </div>
                <div className="sportsCategory">
                    <FontAwesomeIcon className="catIcon" id="sportsIcon" icon={faFootball} />
                    <p className="title">Sports</p>
                </div>
            </div>
        </div>
    );
}

export default Categories;