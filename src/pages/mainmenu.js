import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";

function MainMenu(){
    return (
        <div className="container">
            <div className="heading">
                <h1>Trivia Rush</h1>
            </div>
            <div className="playBtnDiv">
                <Link to='categories'>
                    <div className="playBtn">
                        <FontAwesomeIcon className='playIcon' icon={faPlay} />
                    </div>
                </Link>
            </div>
            <div className="subTextDiv">
                <p className="subText">Tap to Play!</p>
            </div>
            <div className="btnGroup">
                <Link to='stats'><button>Stats</button></Link>
                <Link to='settings'><button>Settings</button></Link>
                <Link to='help'><button>Help</button></Link>
            </div>
        </div>
    );
}

export default MainMenu;