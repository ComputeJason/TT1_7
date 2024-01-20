import logo from "./logo.svg";
import "./css/App.css";
import Destination from './components/Destination'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Minipostman } from "./components/minipostman/Minipostman";


import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Destination />
      </header>
    </div>
  );
}

export default App;
