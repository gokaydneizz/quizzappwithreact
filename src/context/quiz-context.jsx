import React from 'react';

export const questions = [
  {
    question: 'What is 1+4?',
    answers: [
      {answer: 5, isCorrect: true},
      {answer: 14, isCorrect: false},
      {answer: 24, isCorrect: false},
      {answer: 34, isCorrect: false},
    ],
  },
  {
    question: 'What is 10+2?',
    answers: [
      {answer: 100, isCorrect: false},
      {answer: 12, isCorrect: true},
      {answer: 120, isCorrect: false},
      {answer: 92, isCorrect: false},
    ],
  },
  {
    question: 'What is the best programming language?',
    answers: [
      {answer: 'PHP', isCorrect: false},
      {answer: 'C#', isCorrect: false},
      {answer: 'JavaScript', isCorrect: true},
      {answer: 'Java', isCorrect: false},
    ],
  },
  {
    question: 'What is the best league player?',
    answers: [
      {answer: 'JweithSro', isCorrect: true},
      {answer: 'Caps', isCorrect: false},
      {answer: 'quArex', isCorrect: false},
      {answer: 'galipcntrk', isCorrect: false},
    ],
  },
];

const QuizContext = React.createContext();

export default QuizContext;
