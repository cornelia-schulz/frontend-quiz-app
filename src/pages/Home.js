import { useState } from 'react';
import Header from '../components/Header';
import QuizList from '../components/Quiz-List';

function Home() {
  const[isDark, setIsDark] = useState(false);
  const handleDarkModeChange = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "AppDark" : "App"}>
      <Header isDark={isDark} onSwitch={handleDarkModeChange} />
      <QuizList isDark={isDark} />
    </div>
  )
}

export default Home;