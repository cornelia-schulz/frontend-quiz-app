import './Quiz-Result.css';

function QuizResult({isDark, questions, title, icon, result}) {

  return (
    <div className={isDark ? "quiz-result-dark" : "quiz-result"}>
      <h1>Quiz completed</h1>
      <p>You scored...</p>
      <div className="quiz-result-box">
        <img src={icon} alt={title} className="quiz-result-icon" />
        <p className="quiz-result-number">{result}</p>
        <p>out of {questions}</p>
      </div>
      <button>Play Again</button>
    </div>
  )
}

export default QuizResult;