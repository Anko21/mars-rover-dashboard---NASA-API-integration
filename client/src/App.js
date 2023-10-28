import React from "react";
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Intro from "./Intro";
import HomePage from './HomePage'
import Rover from "./Rover";


function App() {
  return (
      <main >
        <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/rover" element={<Rover/>}/>
        </Routes>
      </main>
  )
}

export default App;
