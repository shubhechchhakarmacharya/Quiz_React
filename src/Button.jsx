// import { useState } from "react";
// import questions from "./question";
// const que = [...questions.Question.answer1]

function Button() {
    const button = () => {
        let [score, setScore] = useState( )
        let num = setScore(score+25);
        alert(num);
    }
    return (
        <div className="button">
            <button onClick={button}>Submit</button>
        </div>
    )
}

export default Button;