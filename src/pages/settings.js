import "../css/settings.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Settings(){
    const [settings, setSettings] = useState({difficulty: "", game_speed: "", theme: ""});

    // Fetch initial settings on first render of component
    const initializeSettings = async () => {
        await fetch("/settings")
        .then(res => res.json())
        .then(data => setSettings(data[0]))
        .catch(err => console.log(err));
    };

    const changeSettingBG = () => {
        let difficultyOptions = document.getElementsByClassName("difficultyOption");
        let gameSpeedOptions = document.getElementsByClassName("gameSpeedOption");
        let themeOptions = document.getElementsByClassName("themeOption");

        // Clear background color of each difficulty option
        for(let i=0; i<difficultyOptions.length; i++){
            difficultyOptions[i].style.backgroundColor = '';
        }

        // Clear background color of each game speed option
        for(let i=0; i<gameSpeedOptions.length; i++){
            gameSpeedOptions[i].style.backgroundColor = '';
        }

        // Clear background color of each theme option
        for(let i=0; i<themeOptions.length; i++){
            themeOptions[i].style.backgroundColor = '';
        }

        // Highlight the chosen difficulty option
        switch(settings.difficulty){
            case "EASY":
                difficultyOptions[0].style.backgroundColor = "#969292";
                break;
            case "NORMAL":
                difficultyOptions[1].style.backgroundColor = "#969292";
                break;
            case "HARD":
                difficultyOptions[2].style.backgroundColor = "#969292";
                break;
        }

        // Highlight the chosen game speed option
        switch(settings.game_speed){
            case "10":
                gameSpeedOptions[0].style.backgroundColor = "#969292";
                break;
            case "15":
                gameSpeedOptions[1].style.backgroundColor = "#969292";
                break;
            case "20":
                gameSpeedOptions[2].style.backgroundColor = "#969292";
                break;
        }

        // Highlight the chosen theme option
        switch(settings.theme){
            case "LIGHT":
                themeOptions[0].style.backgroundColor = "#969292";
                break;
            case "DARK":
                themeOptions[1].style.backgroundColor = "#969292";
                break;
        }
    }

    const changeDifficulty = async (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.id;
        let difficulty = "";
        if(targetId === "easyOption") difficulty = "EASY";
        else if(targetId === "normalOption") difficulty = "NORMAL";
        else if(targetId === "hardOption") difficulty = "HARD";

        // Reflect changes in database
        await fetch(`/settings/${settings.id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "difficulty": difficulty
            })
        })
        .then(res => res)
        .then(data => initializeSettings())
        .catch(err => console.log(err));
    }

    const changeGameSpeed = async (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.id;
        let game_speed = "";
        if(targetId === "fastOption") game_speed = "10";
        else if(targetId === "mediumOption") game_speed = "15";
        else if(targetId === "slowOption") game_speed = "20";

        // Reflect changes in database
        await fetch(`/settings/${settings.id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "game_speed": game_speed
            })
        })
        .then(res => res)
        .then(data => initializeSettings())
        .catch(err => console.log(err));
    }

    const changeTheme = async (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.id;
        let theme = "";
        if(targetId === "lightOption") theme = "LIGHT";
        else if(targetId === "darkOption") theme = "DARK";

        // Reflect changes in database
        await fetch(`/settings/${settings.id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "theme": theme
            })
        })
        .then(res => res)
        .then(data => initializeSettings())
        .catch(err => console.log(err));

        // Reflect changes in app
        document.querySelector('body').setAttribute('data-theme', theme);
    }

    useEffect(() => {
        initializeSettings();
    }, []);

    useEffect(() => {
        changeSettingBG();
    }, [settings]);

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
                            <div id="easyOption" className="difficultyOption easyOption" onClick={changeDifficulty}><p>EASY</p></div>
                            <div id="normalOption" className="difficultyOption normalOption" onClick={changeDifficulty}><p>NORMAL</p></div>
                            <div id="hardOption" className="difficultyOption hardOption" onClick={changeDifficulty}><p>HARD</p></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="gameSpeed">
                        <h4 className="gameSpeedLabel">Game Speed</h4>
                        <div className="setOpts gameSpeedOptions">
                            <div id="fastOption" className="gameSpeedOption fastOption" onClick={changeGameSpeed}><p>10 SEC</p></div>
                            <div id="mediumOption" className="gameSpeedOption mediumOption" onClick={changeGameSpeed}><p>15 SEC</p></div>
                            <div id="slowOption" className="gameSpeedOption slowOption" onClick={changeGameSpeed}><p>20 SEC</p></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="theme">
                        <h4 className="themeLabel">Theme</h4>
                        <div className="setOpts themeOptions">
                            <div id="lightOption" className="themeOption lightOption" onClick={changeTheme}><p>Light</p></div>
                            <div id="darkOption" className="themeOption darkOption" onClick={changeTheme}><p>Dark</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;