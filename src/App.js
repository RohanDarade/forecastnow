import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {Routes, Route} from "react-router-dom";
import ClimatePage from './pages/ClimatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Weather' element={<ClimatePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
