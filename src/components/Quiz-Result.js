import { Link } from 'react-router-dom';
import './Quiz-Result.css';

function QuizResult({isDark, questions, title, icon, result}) {

  return (
    <div className={isDark ? "quiz-result-dark" : "quiz-result"}>
      <p className={isDark ? "quiz-result-header-dark" : "quiz-result-header"}>Quiz completed</p>
      <p className={isDark ? "quiz-result-score-dark" : "quiz-result-score"}>You scored...</p>
      <div className={isDark ? "quiz-result-box-dark" : "quiz-result-box"}>
        <div className="quiz-title">
        <img src={icon} alt={title} className={title} /> {title}
        </div>
        <p className={isDark ? "quiz-result-number-dark" : "quiz-result-number"}>{result}</p>
        <p className={isDark ? "quiz-result-questions-dark" : "quiz-result-questions"}>out of {questions}</p>
      </div>
      <Link to="/">
        <button className={isDark ? "play-again-dark" : "play-again"}>Play Again</button>
      </Link>
    </div>
  )
}

export default QuizResult;