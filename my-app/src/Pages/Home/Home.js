import React, { useState } from 'react';
import './Home.css';
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/Category/Category';
import {  useNavigate } from 'react-router-dom';
import ErrorMessage from '../../Components/Message/ErrorMeesage';


const Home = ({ name, setname, fetchQuestions }) => {
  const [category, setcategory] = useState('');
  const [Difficulty, setDifficulty] = useState('0');
  const [error, seterror] = useState(false);
  const history = useNavigate();

  const handleSubmit = () => {
    if (!name || !category || !Difficulty) {
      seterror(true);
      return;
    } else {
      seterror(false);
      fetchQuestions(category, Difficulty);
      history('/Quiz');
    }
  };

  return (
    <div className='Content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className='Settings_select'>
          {/* Add content here or remove this div if not needed */}
          {error && <ErrorMessage>Please Fill all the Details</ErrorMessage>}
          <TextField
            label="Enter Your name"
            variant="outlined"
            value={name}
            onChange={(e) => setname(e.target.value)}
            style={{ marginBottom: "30px" }}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            style={{ marginBottom: "30px" }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant='outlined'
            value={Difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ marginBottom: "30px" }}
          >
            <MenuItem key="easy" value="easy">easy</MenuItem>
            <MenuItem key="medium" value="medium">medium</MenuItem>
            <MenuItem key="Hard" value="Hard">Hard</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz.svg" />
    </div>
  );
};

export default Home;
