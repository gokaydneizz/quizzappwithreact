import React, {useContext, useEffect, useState, useRef} from 'react';
import Card from '../components/Card';
import QuizContext from '../context/quiz-context';

const QuizPage = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [className, setClassName] = useState('btn');

  const {questions, setGameState, setScore} = useContext(QuizContext);

  const nextHandler = () => {
    if (!selectedAnswer) {
      return;
    }
    if (selectedAnswer.isCorrect === true) {
      setScore(prev => prev + 1);
    }
    setCurrQuestion(prev => prev + 1);
    setSelectedAnswer('');
  };

  const endHandler = () => {
    if (!selectedAnswer) {
      return;
    }

    if (selectedAnswer.isCorrect === true) {
      setScore(prev => prev + 1);
    }

    setGameState('end');
  };

  const handleClick = a => {
    setSelectedAnswer(a);
    if (a.isCorrect === false) {
      setClassName('btn false');
    } else {
      setClassName('btn true');
    }
  };

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Quiz App</h1>
      <Card>
        <h1 style={{textAlign: 'center', marginBottom: '20px'}}>
          {questions[currQuestion].question}
        </h1>
        <div className='question-container'>
          {questions[currQuestion].answers.map((a, idx) => {
            return (
              <button
                key={idx}
                onClick={() => handleClick(a)}
                className={selectedAnswer === a ? className : 'btn'}>
                {a.answer}
              </button>
            );
          })}
        </div>

        {currQuestion === questions.length - 1 ? (
          <button
            className='btn'
            style={{marginTop: '30px', backgroundColor: 'orange'}}
            onClick={endHandler}>
            Finish Quiz
          </button>
        ) : (
          <button
            className='btn'
            style={{marginTop: '30px', backgroundColor: 'orange'}}
            onClick={nextHandler}>
            Next Question
          </button>
        )}
      </Card>
    </>
  );
};

export default QuizPage;
