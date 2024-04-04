import Header from './Header';
import QuizList from './Quiz-List';
import { useState } from 'react';
import './reset.css';
import './App.css';

function App() {
  const[isDark, setIsDark] = useState(false);
  const handleDarkModeChange = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "AppDark" : "App"}>
      <Header isDark={isDark} onSwitch={handleDarkModeChange} />
      <QuizList isDark={isDark} />
    </div>
  );
}

export default App;
