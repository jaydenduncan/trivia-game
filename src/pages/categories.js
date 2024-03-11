import "../css/categories.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/fontawesome-free-solid";
import { faFlask } from "@fortawesome/fontawesome-free-solid";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faFootball } from "@fortawesome/free-solid-svg-icons";

function togglePopup(){
    let catInfo = document.getElementById("catInfo");

    if(catInfo.style.visibility === "hidden"){
        catInfo.style.visibility = "visible";
    }
    else{
        catInfo.style.visibility = "hidden";
    }
}

function Categories(){
    return (
        <div className="container">
            <div className="catHeading">
                <Link to="/">
                    <div className="backBtn">
                        <FontAwesomeIcon id="backBtnLeftArrowIcon" icon={faChevronLeft} />
                        <p>Main Menu</p>
                    </div>
                </Link>
                <div className="categoriesTitle">
                    <h1>Categories</h1>
                </div>
                <div className="infoBtn">
                    <FontAwesomeIcon id="infoIcon" icon={faCircleInfo} onClick={togglePopup} />
                    <p id="catInfo">Choose one of the categories below to play! Good luck!</p>
                </div>
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
                    <FontAwesomeIcon className="catIcon" id="geographyIcon" icon={faMapLocationDot} />
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