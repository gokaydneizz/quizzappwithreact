import React, {useContext} from 'react';
import Card from '../components/Card';
import QuizContext from '../context/quiz-context';

const EndPage = () => {
  const {score, questions} = useContext(QuizContext);

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Quiz App</h1>
      <Card>
        <p className='endP'>
          You answered <span>{`${score}`}</span> questions true,out of{' '}
          <span>{`${questions.length}`}</span> questions.
        </p>
      </Card>
    </>
  );
};

export default EndPage;
