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

  return (
    <div className={isPageDark ? "AppDark" : "App"}>
      {quiz && <Header className={isPageDark ? "AppDark" : "App"} isDark={isPageDark} onSwitch={handleDarkModeChange} title={quiz.title} icon={quiz.icon} />}
      {quiz && quiz.questions.map((question, index) => {
        return <QuizQuestion isDark={isPageDark} question={question} key={index} number={index+1} questions={quiz.questions.length} />
      })}
    </div>
    
  )
}

export default Quiz;