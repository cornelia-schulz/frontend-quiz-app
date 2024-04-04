import './Quiz-List.css';
import data from './data.json';

function QuizList({isDark}) {

  return (
    <div className="quiz-list">
      <p className={isDark ? "list-header-dark" : "list-header"}>Welcome to the <span>Frontend Quiz!</span></p>
      <p className={isDark ? "list-tag-line-dark small" : "list-tag-line small"}>Pick a subject to get started.</p>
      <ul className="list-body">
        {data.quizzes.map((quiz) => {
          return <li className={isDark ? "list-entry-dark" : "list-entry"} key={quiz.title}>
                    <img className={quiz.title} src={quiz.icon} alt={quiz.title} />
                    <p className="quiz-text">{quiz.title}</p>
                  </li>
        })}
      </ul>
    </div>
  );
}

export default QuizList;