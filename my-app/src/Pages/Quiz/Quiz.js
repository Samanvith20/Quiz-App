import React, { useEffect, useState } from 'react';
import Question from '../../Components/Questions/Questions';
import { CircularProgress } from '@mui/material';
import "./Quiz.css"

const Quiz = ({ name, Questions, setQuestions, score, setscore }) => {
  const [option, setoption] = useState([]);
  const [currQues, setcurrQues] = useState(0);

  useEffect(() => {
     
      setoption( Questions &&
        handleSuffle([Questions[currQues]?.correct_answer, ...Questions[currQues]?.incorrect_answer])
      );
    }
  , [currQues, Questions]);
   console.log(Questions)
  const handleSuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className='Quiz'>
      <span className='subtitle'>Welcome, {name}</span>
      {Questions.length > 0 ? (
        <>
          <div className='QuizInfo'>
            <span>{Questions[currQues].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            score={score}
            setscore={setscore}
            Questions={Questions}
            setQuestions={setQuestions}
            currQues={currQues}
            setcurrQues={setcurrQues}
            option={option}
            correct={Questions[currQues]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress 
        style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
         />
      )}
    </div>
  );
};

export default Quiz;
