import React, { useState } from 'react'
import ErrorMessage from '../Message/ErrorMeesage';
import {Button} from "@mui/material"
import {useNavigate} from "react-router-dom"
import "./Questions.css"

const Question = ({score,setscore,option,Questions,setQuestions,currQues,setcurrQues,correct}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const  handleSelect =(i)=>{
     if(selected===i && selected===true) return "select";
     else if(selected===i && selected===!true) return "wrong";
     else if(i===correct)  return "select";
    }
    const handleCheck =(i)=>{
       setSelected(i);
       if(i===correct) setscore(score+1);
       setError(false);

    }
     const history =useNavigate();
    const handleNext =()=>{
      if (currQues > 8) {
        history("/result");
      } else if (selected) {
        setcurrQues(currQues + 1);
        setSelected();
      } else setError("Please select an option first");
    };
    const handleQuit =()=>{
        setcurrQues(0);
        setQuestions();
    }
    
  return (
    <div className='question'>
        <h1> Question {currQues+1}</h1>
        <div className="singleQuestion">
        <h2>{Questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {option &&
            option.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>

    </div>
    </div>
  )
}

export default Question
