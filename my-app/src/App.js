import React from 'react';
import Header from './Components/Header/Header';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: `url("/quiz.png")` }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};
 
export default App;
