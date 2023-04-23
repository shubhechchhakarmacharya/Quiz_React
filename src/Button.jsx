// import { useState } from "react";
// import questions from "./question";
// const que = [...questions.Question.answer1]

function Button() {
    const button = () => {
        // const [score, setScore] = useState(0)
        // if(value === ans){
        //     setScore += score
        //     alert(setScore)
        // }
        alert("Know you result.")
    }
    return (
        <div className="button">
            <button onClick={button}>Submit</button>
        </div>
    )
}

export default Button;