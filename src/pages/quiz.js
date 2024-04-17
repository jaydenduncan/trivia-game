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

    const [answered, setAnswered] = useState(false);
    const [roundStarted, setRoundStarted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seconds, setSeconds] = useState(15);
    const [lives, setLives] = useState(3);
    const [points, setPoints] = useState(0);
    const [streak, setStreak] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [questionNum, setQuestionNum] = useState(1);
    const [difficulty, setDifficulty] = useState(Level.EASY);
    const [easyBank, setEasyBank] = useState([]);
    const [mediumBank, setMediumBank] = useState([]);
    const [hardBank, setHardBank] = useState([]);
    const [questionIdx, setQuestionIdx] = useState(-1);
    const [question, setQuestion] = useState("");
    const [correctAns, setCorrectAns] = useState("");
    const [choices, setChoices] = useState([]);

    function changeBgColor(){
        if(document.getElementById("quizPage")){
            let page = document.getElementById("quizPage");
            page.style.backgroundColor = themeList[params.category][0];
        }
    }

    function fillEasyBank(){
        let maxIdx = themeList[params.category][1].length;
        let randIdx = Math.floor(Math.random() * maxIdx);
        let catNum = themeList[params.category][1][randIdx];
        
        setLoading(true);

        // Fill easy question bank
        setTimeout(() => {
            fetch(`https://opentdb.com/api.php?amount=5&category=${catNum}&difficulty=easy&type=multiple`)
            .then(response => response.json())
            .then(data => {
                if(data["response_code"] === 0){
                    setEasyBank(data["results"]);
                }
                else{
                    alert("ERROR: Failed to fill easy question bank");
                    window.location = "/categories";
                }

                setLoading(false);
            })
            .catch(error => console.error(error));
        }, 1000);
    }

    function fillMediumBank(){
        let maxIdx = themeList[params.category][1].length;
        let randIdx = Math.floor(Math.random() * maxIdx);
        let catNum = themeList[params.category][1][randIdx];

        setLoading(true);

        // Fill medium question bank
        fetch(`https://opentdb.com/api.php?amount=5&category=${catNum}&difficulty=medium&type=multiple`)
        .then(response => response.json())
        .then(data => {
            if(data["response_code"] === 0){
                setMediumBank(data["results"]);
            }
            else{
                alert(`ERROR: Failed to fill medium question bank`);
                window.location = "/categories";
            }
        })
        .catch(error => console.error(error));
    }

    function fillHardBank(){
        let maxIdx = themeList[params.category][1].length;
        let randIdx = Math.floor(Math.random() * maxIdx);
        let catNum = themeList[params.category][1][randIdx];

        setLoading(true);

        // Fill hard question bank
        fetch(`https://opentdb.com/api.php?amount=5&category=${catNum}&difficulty=hard&type=multiple`)
        .then(response => response.json())
        .then(data => {
            if(data["response_code"] === 0){
                setHardBank(data["results"]);
            }
            else{
                alert(`ERROR: Failed to fill hard question bank`);
                window.location = "/categories";
            }
        })
        .catch(error => console.error(error));
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

    function pointsToAdd(){
        let total = 0;
        let bonus = 0;

        switch(difficulty){
            case Level.EASY:
                total += 25;
                break;
            case Level.MEDIUM:
                total += 75;
                break;
            case Level.HARD:
                total += 150;
                break;
        }

        if(seconds > 5){
            bonus += seconds * 2;
        }

        return (total * multiplier) + bonus;
    }

    function findCorrectAnswerId(){
        let answerChoices = document.getElementById("answerChoices");
        
        for(let child of answerChoices.children){
            if(child.value === correctAns) return child.id;
        }
    }

    function checkAnswer(e){
        if(!e){
            setRoundStarted(false);

            // Disable answer buttons
            setAnswered(true);

            // Highlight correct answer
            let correctElementId = findCorrectAnswerId();
            let correctElement = document.getElementById(correctElementId);
            correctElement.style.color = "green";

            // Take away life, reset streak
            setLives(lives - 1);
            setStreak(0);
        }
        else{
            e.preventDefault();

            // Stop the timer, disable answer buttons
            setAnswered(true);

            // Highlight correct answer and incorrect answer
            let answerElement = document.getElementById(e.target.id);
            let correctElementId = findCorrectAnswerId();
            let correctElement = document.getElementById(correctElementId);
            answerElement.style.color = (e.target.value === correctAns) ? "green" : "red";
            if(e.target.value !== correctAns) correctElement.style.color = "green";

            // Reward points for correct answer, deduct a life otherwise
            if(e.target.value === correctAns){
                let gainedPoints = pointsToAdd();
                setPoints(points + gainedPoints);
                setStreak(streak + 1);
            }
            else{
                setLives(lives - 1);
                setStreak(0);
            }
        }

        // Restart round
        setTimeout(() => {
            setRoundStarted(false);
            setSeconds(15);
            setQuestionNum(questionNum + 1);
        }, 2000);
    }

    useEffect(() => {
        changeBgColor();
        fillEasyBank();
    }, []);

    useEffect(() => {
        if(roundStarted && !loading){
            let qpTimer = document.getElementById("qpTimer");
            if(!answered) qpTimer.style.animationPlayState = "running";
            else if(answered) qpTimer.style.animationPlayState = "paused";

            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            if(seconds === 0 || answered) clearTimeout(timer);
            if(seconds === 0) checkAnswer();
        }
    }, [seconds, loading, answered]);

    useEffect(() => {
        // Switch difficulty based on question number
        if(questionNum === 6){
            setDifficulty(Level.MEDIUM);
            fillMediumBank();
        }
        else if(questionNum === 11){
            setDifficulty(Level.HARD);
            fillHardBank();
        }

        setQuestionIdx((questionNum === 6 || questionNum === 11) ? 0 : questionIdx+1);
    }, [questionNum]);

    useEffect(() => {
        if(easyBank.length !== 0 || mediumBank.length !== 0 || hardBank.length !== 0){
            setAnswered(false);
            setRoundStarted(true);
            setLoading(true);
            
            setTimeout(() => {
                if(difficulty === Level.EASY && easyBank.length > 0 && questionIdx < easyBank.length){
                    let questionInfo = easyBank[questionIdx];

                    // Assign question
                    setQuestion(questionInfo["question"]);

                    // Fill choices array with answer choices
                    setChoices([...questionInfo["incorrect_answers"], questionInfo["correct_answer"]]);

                    // Set correct answer
                    setCorrectAns(questionInfo["correct_answer"]);
                }
                else if(difficulty === Level.MEDIUM && mediumBank.length > 0 && questionIdx < mediumBank.length){
                    let questionInfo = mediumBank[questionIdx];

                    setQuestion(questionInfo["question"]);

                    setChoices([...questionInfo["incorrect_answers"], questionInfo["correct_answer"]]);

                    setCorrectAns(questionInfo["correct_answer"]);
                }
                else if(difficulty === Level.HARD && hardBank.length > 0 && questionIdx < hardBank.length){
                    let questionInfo = hardBank[questionIdx];

                    setQuestion(questionInfo["question"]);

                    setChoices([...questionInfo["incorrect_answers"], questionInfo["correct_answer"]]);

                    setCorrectAns(questionInfo["correct_answer"]);
                }
                else if(questionIdx > 0 && questionIdx >= hardBank.length){
                    // Reset index to 0 and refill respective question bank if index out of range
                    if(difficulty === Level.HARD){
                        fillHardBank();
                        setQuestionIdx(0);
                    }
                }

                setLoading(false);
            }, 2000);
        }
    }, [easyBank, mediumBank, hardBank, questionIdx]);

    useEffect(() => {
        var questionEle = document.getElementById("question");
        questionEle.innerHTML = question;
    }, [question]);

    // Set multiplier based on streak
    useEffect(() => {
        if(streak === 0) setMultiplier(1);
        else if(streak === 5) setMultiplier(2);
        else if(streak === 10) setMultiplier(3);
    }, [streak]);

    // End game after all 3 lives are lost
    useEffect(() => {
        if(lives === 0){
            setTimeout(() => {
                alert("GAME OVER" + "\n" + "Total Points: " + points);
                window.location = "/categories";
            }, 2000);
        }
    }, [lives]);

    useEffect(() => {
        var choice1 = document.getElementById("choice1");
        var choice2 = document.getElementById("choice2");
        var choice3 = document.getElementById("choice3");
        var choice4 = document.getElementById("choice4");

        let indices = [0, 1, 2, 3];
        indices = [...shuffle(indices)];

        choice1.value = choices[indices[0]];
        choice2.value = choices[indices[1]];
        choice3.value = choices[indices[2]];
        choice4.value = choices[indices[3]];
        
        choice1.innerHTML = choices[indices[0]];
        choice2.innerHTML = choices[indices[1]];
        choice3.innerHTML = choices[indices[2]];
        choice4.innerHTML = choices[indices[3]];
    }, [choices]);

    return loading ?
    (
        <div className="container">
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        </div>
    )
    :
    (
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
                    <p id="question"></p>
                </div>
                <div id="answerChoices">
                    <p id="choice1" onClick={!answered ? checkAnswer : () => {return;}}></p>
                    <p id="choice2" onClick={!answered ? checkAnswer : () => {return;}}></p>
                    <p id="choice3" onClick={!answered ? checkAnswer : () => {return;}}></p>
                    <p id="choice4" onClick={!answered ? checkAnswer : () => {return;}}></p>
                </div>
            </div>
        </div>
    );
}

export default Quiz;