
import { useState } from 'react';
import './reset.css';
import './App.css';
import Home from './pages/Home.js'

function App() {
  const[isDark, setIsDark] = useState(false);
  const handleDarkModeChange = () => {
    setIsDark(!isDark);
  }

  return (
      <div className={isDark ? "AppDark" : "App"}>
        <Home isDark={isDark} onSwitch={handleDarkModeChange} />
      </div>
  );
}

export default App;
