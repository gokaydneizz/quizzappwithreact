import {useState} from 'react';
import './App.css';
import QuizContext, {questions} from './context/quiz-context';
import EndPage from './pages/EndPage';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';

function App() {
  const [gameState, setGameState] = useState('homepage');
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{gameState, setGameState, questions, score, setScore}}>
      <div>
        {gameState === 'homepage' && <HomePage />}{' '}
        {gameState === 'quizz' && <QuizPage />}
        {gameState === 'end' && <EndPage />}
      </div>
    </QuizContext.Provider>
  );
}

export default App;
