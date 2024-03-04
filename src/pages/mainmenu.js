import { Link } from "react-router-dom";

function MainMenu(){
    return (
        <div className="container">
            <h1>Trivia Rush</h1>
            <Link to='categories'><div className="playBtn">Play</div></Link>
            <p className="subText">Tap to Play!</p>
            <div className="btnGroup">
                <Link to='stats'><button>Stats</button></Link>
                <Link to='settings'><button>Settings</button></Link>
                <Link to='help'><button>Help</button></Link>
            </div>
        </div>
    );
}

export default MainMenu;