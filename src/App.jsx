import React from 'react';
import questions from "./question";

function App() {
  return (
    questions.Question.map((ques) => {
      return (
        <div key={ques.no}>
          <a>{ques.no}. {ques.question} </a> <br />
          <input type="radio" name={ques.no} value="a" />
          <label >{ques.answer1}</label>
          <input type="radio" name={ques.no} value="b" />
          <label >{ques.answer2}</label>
        </div>
      )
    })
  )
}

export default App;
