import Header from '../components/Header';
import QuizList from '../components/Quiz-List';

function Home({isDark, onSwitch}) {
  return (
    <>
      <Header isDark={isDark} onSwitch={onSwitch} />
      <QuizList isDark={isDark} />
    </>
  )
}

export default Home;