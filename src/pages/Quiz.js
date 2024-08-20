import { useParams } from "react-router-dom";
import data from '../data.json';
import Header from "../components/Header";
import { useEffect, useState } from "react";
import QuizQuestion from "../components/Quiz-Question";

function Quiz(props) {
  const { state } = props.location || {};
  const[isPageDark, setIsPageDark] = useState(false);
  const handleDarkModeChange = () => {
    setIsPageDark(!isPageDark);
  }

  const { quizID } = useParams();
  const [ quiz, setQuiz ] = useState(null);
  const [ showScore, setShowScore ] = useState(false);
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ score, setScore ] = useState(0);

  useEffect(() => {
    const quizData = data.quizzes.filter((quiz) => {
      return quiz.title === quizID;
    });
    setQuiz(quizData[0]);

    if (state) {
      const { isDark } = state;
      setIsPageDark(isDark);
    }
  }, [quizID, state]);

  const handleAnswerSubmit = (isCorrect) => {
    console.log('submit answer')
;    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={isPageDark ? "AppDark" : "App"}>
      {quiz && <Header className={isPageDark ? "AppDark" : "App"} isDark={isPageDark} onSwitch={handleDarkModeChange} title={quiz.title} icon={quiz.icon} />}
      {showScore ? (
        <div className="score-section">You scored {score} out of {quiz.questions.length}</div>
      ) : (
        quiz && <QuizQuestion isDark={isPageDark} question={quiz.questions[currentQuestion]} number={currentQuestion + 1} questions={quiz.questions.length} submitQuestion={handleAnswerSubmit} />
      )}
    </div>
  )
}

export default Quiz;