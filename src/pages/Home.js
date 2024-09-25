import { useLocation } from 'react-router-dom';
import { useReducer } from 'react';
import Header from '../components/Header';
import QuizList from '../components/Quiz-List';
import { darkModeReducer, initialState } from '../reducers/darkModeReducer';
import { DarkModeContext, DarkModeDispatchContext } from '../context/darkModeContext';

function Home() {
  let { state } = useLocation();
  const [ initstate, dispatch ] = useReducer(darkModeReducer, state||initialState);
  const { isDark } = initstate;

  const handleDarkModeChange = () => {
    dispatch({ type: "toggleIsDark" })
  }

  return (
    <DarkModeContext.Provider value={state}>
      <DarkModeDispatchContext.Provider value={dispatch}>
        <div className={isDark ? "AppDark" : "App"}>
          <Header isDark={isDark} onSwitch={handleDarkModeChange} />
          <QuizList isDark={isDark} />
        </div>
      </DarkModeDispatchContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default Home;