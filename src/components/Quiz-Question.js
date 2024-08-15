import './Quiz-Question.css';
import { useState, useEffect } from "react";

function QuizQuestion({isDark, question, number, questions, submitQuestion}) {
  
  const [barWidth, setBarWidth] = useState(0);
  // onclick add class and collect counter option.
  
  useEffect(() => {
    const width = number / questions * 100;
    setBarWidth(width);
  }, [number, questions])

  return (
    <div className={isDark ? "quiz-question-dark" : "quiz-question"}>
      <p className="question-count">Question {number} of {questions}</p>
      <p className="question">{question.question}</p>
      <div className="bar-outer">
        <div className="bar-inner" style={{ width: barWidth + "%" }}></div>
      </div>
      {question.options.map((answer, index) => {
        return <div className={isDark ? "options-dark" : "options"} key={index}>
                  <div className="counter">{index+1}</div>{answer}
                </div>
      })}
      <button className={isDark ? "submit-answer-dark" : "submit-answer"} onClick={submitQuestion}>Submit Answer</button>
    </div>
  )
}

export default QuizQuestion;