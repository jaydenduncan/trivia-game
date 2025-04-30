import "../css/settings.css";

function Settings(){
    return (
        <div className="container">
            <div className="settingsPage">
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