import "../css/confirm.css";
import img_general from './images/img_general.png';
import img_art from './images/img_art.png';
import img_science from './images/img_science.png';
import img_geography from './images/img_geography.png';
import img_history from './images/img_history.png';
import img_entertainment from './images/img_entertainment.png';
import img_math from './images/img_math.png';
import img_sports from './images/img_sports.png';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Confirm(){
    let params = useParams();
    const pageInfo = {
        "General": ["#bebfb4", "These are general questions about everyday life.", 
                    img_general],
        "Art": ["#ed1c20", "See how much you know about creative art.", img_art],
        "Science": ["#0cc92c", "Test your knowledge about science and nature.", img_science],
        "Geography": ["#1092e3", "These questions will be based on locations around the world and its inhabitants.",
                        img_geography],
        "History": ["#ed9d13", "Test your luck with questions about past events and influential figures.",
                    img_history],
        "Entertainment": ["#c623db", "Assess your celebrity and media expertise.", img_entertainment],
        "Math": ["#45f7da", "Evaluate your numerical skills with questions about math.", img_math],
        "Sports": ["#edf551", "These will be questions about different sports games and sports teams.", img_sports]
    };

    const [desc, setDesc] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    function changeBgColor(){
        if(document.getElementById("confirmPage")){
            let page = document.getElementById("confirmPage");
            page.style.backgroundColor = pageInfo[params.category][0];
        }
    }

    function changeDesc(){
        setDesc(pageInfo[params.category][1]);
    }

    function changeImg(){
        setImgUrl(pageInfo[params.category][2]);
    }

    useEffect(() => {
        changeBgColor();
        changeDesc();
        changeImg();
    });

    return (
        <div className="container">
            <div id="confirmPage">
                <h1>Category: {params.category}</h1>
                <p id="cpDesc">{desc}</p>
                <img id="cpImg" src={imgUrl} alt="Category Image" height={125} width={125} />
                <p id="cpPrompt">Ready to start?</p>
                <div id="cpChoices">
                    <Link to={"/quiz/" + params.category}>
                        <button id="yesChoice">Yes!</button>
                    </Link>
                    <Link to="/categories">
                        <button id="backChoice">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Confirm;