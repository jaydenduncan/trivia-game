import "../css/confirm.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Confirm(){
    let params = useParams();

    function changeBgColor(){
        if(document.getElementById("confirmPage")){
            let page = document.getElementById("confirmPage")
            switch(params.category){
                case "General":
                    page.style.backgroundColor = "#bebfb4";
                    break;
                case "Art":
                    page.style.backgroundColor = "#ed1c20";
                    break;
                case "Science":
                    page.style.backgroundColor = "#0cc92c";
                    break;
                case "Geography":
                    page.style.backgroundColor = "#1092e3";
                    break;
                case "History":
                    page.style.backgroundColor = "#ed9d13";
                    break;
                case "Entertainment":
                    page.style.backgroundColor = "#c623db";
                    break;
                case "Math":
                    page.style.backgroundColor = "#45f7da";
                    break;
                case "Sports":
                    page.style.backgroundColor = "#edf551";
                    break;
            }
        }
    }

    useEffect(() => {
        changeBgColor();
    })

    return (
        <div className="container">
            <div id="confirmPage">
                <h1>Category: {params.category}</h1>
            </div>
        </div>
    );
}

export default Confirm;