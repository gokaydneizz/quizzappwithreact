import React, {useContext} from 'react';

import Card from '../components/Card';
import QuizContext from '../context/quiz-context';

const HomePage = () => {
  const {setGameState} = useContext(QuizContext);

  const handleStart = () => {
    setGameState('quizz');
  };

  return (
    <>
      <h1 className='title'>Quiz App</h1>
      <Card>
        <button onClick={handleStart} className='btn'>
          Start Quiz
        </button>
      </Card>
    </>
  );
};

export default HomePage;
