import React, { useState } from 'react';
import Header from './Components/Header/Header';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import axios from "axios"

const App = () => {
  const[name,setname]=useState('')
   const[Questions,setQuestions]=useState('')
   const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: `url("/quiz.png")` }}>
        <Header />
        <Routes>
        <Route path="/" element={<Home name={name}  setname={setname} fetchQuestions={fetchQuestions}/>} />

          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};
 
export default App;
