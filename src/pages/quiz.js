import "../css/quiz.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Quiz(){
    let params = useParams();
    let themeList = {
        "General": "#bebfb4",
        "Art": "#ed1c20",
        "Science": "#0cc92c",
        "Geography": "#1092e3",
        "History": "#ed9d13",
        "Entertainment": "#c623db",
        "Math": "#45f7da",
        "Sports": "#edf551"
    };
    const questionSample = "Which of the following blood vessels carries deoxygenated blood?";
    const choicesSample = ["Aorta", "Pulmonary Artery", "Pulmonary Vein", "Coronary Artery"];

    const [lives, setLives] = useState(0);
    const [points, setPoints] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [questionNum, setQuestionNum] = useState(1);
    const [question, setQuestion] = useState(questionSample);
    const [choices, setChoices] = useState(choicesSample)

    function changeBgColor(){
        if(document.getElementById("quizPage")){
            let page = document.getElementById("quizPage");
            page.style.backgroundColor = themeList[params.category];
        }
    }

    useEffect(() => {
        changeBgColor();
    });

    return (
        <div className="container">
            <div id="quizPage">
                <div id="qpTimer">
                    <p id="qpTimerSecond">15</p>
                </div>
                <div id="gameInfo">
                    <p>Lives: {lives}</p>
                    <p>Points: {points}</p>
                    <p>Multiplier: {multiplier}x</p>
                </div>
                <h2 id="qnHeading">Question {questionNum}</h2>
                <div id="questionBox">
                    <p id="question">{question}</p>
                </div>
                <div id="answerChoices">
                    <p>{choices[0]}</p>
                    <p>{choices[1]}</p>
                    <p>{choices[2]}</p>
                    <p>{choices[3]}</p>
                </div>
            </div>
        </div>
    );
}

export default Quiz;