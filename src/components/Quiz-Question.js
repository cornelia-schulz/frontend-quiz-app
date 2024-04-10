import './Quiz-Question.css';

function QuizQuestion({isDark, question, number, questions}) {
  


  return (
    <div className={isDark ? "quiz-question-dark" : "quiz-question"}>
      <p className="question-count">Question {number} of {questions}</p>
      <p className="question">{question.question}</p>
      <div>bar</div>
      {question.options.map((answer, index) => {
        return <div className={isDark ? "options-dark" : "options"}>
                  <div className="counter">{index+1}</div>{answer}
                </div>
      })}
      <button className={isDark ? "submit-answer-dark" : "submit-answer"}>Submit Answer</button>
    </div>
  )
}

export default QuizQuestion;