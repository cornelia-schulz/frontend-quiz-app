import './Quiz-Question.css';
import { useState, useEffect } from "react";

function QuizQuestion({isDark, question, number, questions, submitQuestion}) {
  
  const [ barWidth, setBarWidth ] = useState(0);
  const [ selected, setSelected ] = useState({option: "nothing", index: -1});
  const [ isCorrect, setIsCorrect ] = useState(false);
  
  useEffect(() => {
    const width = number / questions * 100;
    setBarWidth(width);
    console.log(selected, isCorrect);
  }, [number, questions, selected, isCorrect])

  const updateSelected = (option, index) => {
    setSelected({option, index});
  }

  const checkAnswer = () => {
    // check if answer is correct or not and change the colour of the selected div
    // change button to next question button
    if(selected.option.option===question.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <div className={isDark ? "quiz-question-dark" : "quiz-question"}>
      <p className="question-count">Question {number} of {questions}</p>
      <p className="question">{question.question}</p>
      <div className="bar-outer">
        <div className="bar-inner" style={{ width: barWidth + "%" }}></div>
      </div>
      {question.options.map((option, index) => {
        return <div className={isDark ? "options-dark" : "options"} tabIndex={-1} key={index} onClick={() => updateSelected({option}, {index})} >
                  <div className="counter">{index+1}</div>{option}
                </div>
      })}
      <button className={isDark ? "submit-answer-dark" : "submit-answer"} onClick={checkAnswer}>Submit Answer</button>
    </div>
  )
}

export default QuizQuestion;