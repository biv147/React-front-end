import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Quiz from "./Components/quiz";
import Upload from "./Components/upload";
import Random from "./Components/random";
import Home from "./Components/home";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="Center">Assignment 1</h1>
        <h2 className="Center">Vraj Shah - 100658669</h2>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/Quiz" className="nav-link">
                Quiz
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/upload" className="nav-link">
                Upload
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/random" className="nav-link">
                Random
              </Link>
            </li>
          </ul>
        </nav>

        <Route path="/home" component={Home} />
        <Route path="/Quiz" component={Quiz} />
        <Route path="/upload" component={Upload} />
        <Route path="/random" component={Random} />
      </div>
    </Router>
  );
}

export default App;
