import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Header from '../components/Header';
import { useEffect, useReducer, useState } from 'react';
import QuizQuestion from '../components/Quiz-Question';
import QuizResult from '../components/Quiz-Result';
import { darkModeReducer, initialState } from '../reducers/darkModeReducer';
import { DarkModeContext, DarkModeDispatchContext } from '../context/darkModeContext';

function Quiz() {
  let { state } = useLocation();
  const [ initState, dispatch ] = useReducer(darkModeReducer, state||initialState);
  const { isDark } = initState;
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
  }, [quizID, isDark, score]);

  const handleDarkModeChange = () => {
    dispatch({ type: "toggleIsDark" })
  }

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
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
    <DarkModeContext.Provider value={state}>
      <DarkModeDispatchContext.Provider value={dispatch}>
        <div className={isDark ? "AppDark" : "App"}>
          {quiz && <Header className={isDark ? "AppDark" : "App"} isDark={isDark} onSwitch={handleDarkModeChange} title={quiz.title} icon={quiz.icon} />}
          {showScore ? (
            <QuizResult isDark={isDark} questions={quiz.questions.length} title={quiz.title} icon={quiz.icon} result={score} />
          ) : (
            quiz && <QuizQuestion isDark={isDark} question={quiz.questions[currentQuestion]} number={currentQuestion + 1} questions={quiz.questions.length} submitQuestion={handleAnswerSubmit} />
          )}
        </div>
    </DarkModeDispatchContext.Provider>
    </DarkModeContext.Provider>
  )
}

export default Quiz;