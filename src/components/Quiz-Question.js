import './Quiz-Question.css';
import { useState, useEffect } from 'react';
import error from '../assets/images/icon-error.svg'

function QuizQuestion({isDark, question, number, questions, submitQuestion}) {
  
  const [ barWidth, setBarWidth ] = useState(0);
  const [ selected, setSelected ] = useState({option: "nothing", index: -1});
  const [ isCorrect, setIsCorrect ] = useState(false);
  const [ hasQuestionBeenSubmitted, setHasQuestionBeenSubmitted ] = useState(false);
  const [ hasOptionBeenSelected, setHasOptionBeenSelected ] = useState(false);
  const [ emptySubmission, setEmptySubmission ] = useState(false);
  
  useEffect(() => {
    const width = number / questions * 100;
    setBarWidth(width);
    console.log(selected, isCorrect, hasQuestionBeenSubmitted, hasOptionBeenSelected, emptySubmission);
  }, [number, questions, selected, isCorrect, hasQuestionBeenSubmitted, emptySubmission])

  const updateSelected = (option, index) => {
    setSelected({option, index});
    setHasOptionBeenSelected(true);
    setEmptySubmission(false);
  }

  const checkAnswer = () => {
    // check if answer is correct or not and change the colour of the selected div
    // change button to next question button
    if (selected.index !== -1) {
      setHasQuestionBeenSubmitted(true);
      if(selected.option.option===question.answer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    } else {
      setEmptySubmission(true);
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
        return <div className={`${isDark ? "options-dark" : "options"}`} tabIndex={-1} key={index} onClick={() => updateSelected({option}, {index})} >
                  <div className="counter">{index+1}</div>{option}
                </div>
      })}
      <button className={`${isDark ? "submit-answer-dark" : "submit-answer"} ${hasQuestionBeenSubmitted ? "invisible" : "visible"}`} onClick={checkAnswer}>Submit Answer</button>
      <button className={`${isDark ? "submit-answer-dark" : "submit-answer"} ${hasQuestionBeenSubmitted ? "visible" : "invisible"}`} onClick={submitQuestion}>Next Question</button>
      <p className={`${emptySubmission ? "submission-error" : "invisible"} ${isDark ? "submission-error-dark" : ""}`}>
        <img src={error} className="submission-error-img" alt="error message" />
        Please select an answer
      </p>
    </div>
  )
}

export default QuizQuestion;