// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import HomePage from './component/HomePage';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
