import "../css/quiz.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Quiz(){
    let params = useParams();
    let themeList = {
        "General": ["#bebfb4", [9]],
        "Art": ["#ed1c20", [25]],
        "Science": ["#0cc92c", [17, 18]],
        "Geography": ["#1092e3", [22]],
        "History": ["#ed9d13", [23]],
        "Entertainment": ["#c623db", [10, 11, 12, 13, 14, 15, 16, 31, 32]],
        "Math": ["#45f7da", [19]],
        "Sports": ["#edf551", [21]]
    };
    const Level = {
        EASY: "Easy",
        MEDIUM: "Medium",
        HARD: "Hard"
    };
    const questionSample = "Which of the following blood vessels carries deoxygenated blood?";
    const choicesSample = ["Aorta", "Pulmonary Artery", "Pulmonary Vein", "Coronary Artery"];

    const [seconds, setSeconds] = useState(15);
    const [lives, setLives] = useState(3);
    const [points, setPoints] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [questionNum, setQuestionNum] = useState(1);
    const [difficulty, setDifficulty] = useState(Level.EASY);
    const [question, setQuestion] = useState("");
    const [correctAns, setCorrectAns] = useState("");
    const [choices, setChoices] = useState([]);

    function changeBgColor(){
        if(document.getElementById("quizPage")){
            let page = document.getElementById("quizPage");
            page.style.backgroundColor = themeList[params.category][0];
        }
    }

    function chooseQuestion(){
        let maxIdx = themeList[params.category][1].length;
        let randIdx = Math.floor(Math.random() * maxIdx);
        let catNum = themeList[params.category][1][randIdx];
        let catDifficulty = difficulty.toLowerCase();

        fetch(`https://opentdb.com/api.php?amount=1&category=${catNum}&difficulty=${catDifficulty}&type=multiple`)
        .then(response => response.json())
        .then(data => {
            if(data["response_code"] === 0){
                let results = data["results"][0];

                // Assign question
                setQuestion(results["question"]);

                // Fill choices array with answer choices
                setChoices([...results["incorrect_answers"], results["correct_answer"]]);

                // Set correct answer
                setCorrectAns(results["correct_answer"]);
            }
            else{
                chooseQuestion();
            }
        })
        .catch(error => console.log("Got an error..." + error));
    }

    function shuffle(arr){
        let currIdx = arr.length;
        let randIdx;

        while(currIdx > 0){
            randIdx = Math.floor(Math.random() * currIdx);
            currIdx--;

            [arr[currIdx], arr[randIdx]] = [arr[randIdx], arr[currIdx]];
        }

        return arr;
    }

    useEffect(() => {
        console.log("Rendering...");
        changeBgColor();
        chooseQuestion();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setSeconds(seconds-1), 1000);
        if(seconds == 0) clearTimeout(timer);
    }, [seconds]);

    useEffect(() => {
        if(questionNum < 10){
            setDifficulty(Level.EASY);
            let difficultyEle = document.getElementById("difficulty");
            difficultyEle.style.color = "#0eb31c";
        }
        else if((questionNum > 10) && (questionNum <= 25)){
            setDifficulty(Level.MEDIUM);
            let difficultyEle = document.getElementById("difficulty");
            difficultyEle.style.color = "#e89d1c";
        }
        else if(questionNum > 25){
            setDifficulty(Level.HARD);
            let difficultyEle = document.getElementById("difficulty");
            difficultyEle.style.color = "#eb0725";
        }
    }, [questionNum]);

    useEffect(() => {
        var questionEle = document.getElementById("question");
        questionEle.innerHTML = question;
    }, [question]);

    useEffect(() => {
        var choice1 = document.getElementById("choice1");
        var choice2 = document.getElementById("choice2");
        var choice3 = document.getElementById("choice3");
        var choice4 = document.getElementById("choice4");

        let indices = [0, 1, 2, 3];
        indices = [...shuffle(indices)];
        
        choice1.innerHTML = choices[indices[0]];
        choice2.innerHTML = choices[indices[1]];
        choice3.innerHTML = choices[indices[2]];
        choice4.innerHTML = choices[indices[3]];
    }, [choices]);

    return (
        <div className="container">
            <div id="quizPage">
                <div id="progressBar">
                    <div id="qpTimer">
                        <p id="qpTimerSecond">{seconds}</p>
                    </div>
                </div>
                <div id="gameInfo">
                    <p id="giLives">Lives: {lives}</p>
                    <p id="giPoints">Points: {points}</p>
                    <p id="giMP">Multiplier: {multiplier}x</p>
                </div>
                <h2 id="qnHeading">Question {questionNum}</h2>
                <div id="questionBox">
                    <p id="difficulty">{difficulty}</p>
                    <p id="question"></p>
                </div>
                <div id="answerChoices">
                    <p id="choice1">{choices[0]}</p>
                    <p id="choice2">{choices[1]}</p>
                    <p id="choice3">{choices[2]}</p>
                    <p id="choice4">{choices[3]}</p>
                </div>
            </div>
        </div>
    );
}

export default Quiz;