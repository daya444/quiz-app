import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Question } from '../../components/question/question'
import './quiz.css'

export const Quiz = ({ name, setQuestion, score, setScore, question }) => {
  const [option, setOption] = useState();
  const [currentquestion, setCurrentquestion] = useState(0);

  useEffect(() => {
    if (question) {
      setOption(
        handleshuffle([
          question[currentquestion]?.correct_answer,
          ...question[currentquestion]?.incorrect_answers,
        ])
      );
    }
  }, [question, currentquestion]);

  const handleshuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span>
      {question ? (
        <>
          <div className='quizInfo'>
            <span>{question[currentquestion].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currentquestion={currentquestion}
            setCurrentquestion={setCurrentquestion}
            question={question}
            setQuestion={setQuestion}
            correct={question[currentquestion]?.correct_answer}
            option={option}
            score={score}
            setscore={setScore}
          />
        </>
      ) : (
        <CircularProgress 
          style={{ margin: 100 }}
          size={150}
          color="inherit"
          thickness={1}
        />
      )}
    </div>
  )
}
