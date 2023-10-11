import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../../Components/Questions/Questions";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffledOptions = handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ]);
      setOptions(shuffledOptions);
    }
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  if (!questions || currQues < 0 || currQues >= questions.length) {
    // Handle the case where questions is undefined or currQues is out of bounds
    return (
      <div className="quiz">
        <span className="subtitle">Welcome, {name}</span>
        <div className="quizInfo">
          <span>No questions available</span>
          <span>Score : {score}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
    <span className="subtitle">Welcome, {name}</span>

    {questions ? (
      <>
        <div className="quizInfo">
          <span>{questions[currQues].category}</span>
          <span>
            {/* {questions[currQues].difficulty} */}
            Score : {score}
          </span>
        </div>
        <Question
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
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
