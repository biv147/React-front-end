import { Button } from "bootstrap";
import React, { Component, useState } from "react";
import jquery from "jquery";

const Questions = [
  {
    Question: "Earth is the ___ planet!",
    Answer: [
      { a: "First", correct: false },
      { a: "Second", correct: false },
      { a: "Third", correct: true },
      { a: "Forth", correct: false },
    ],
  },
  {
    Question: "What does OTU stand for?",
    Answer: [
      { a: "OntarioTech University", correct: true },
      { a: "OntarioTechnology University", correct: false },
      { a: "OnTech University", correct: false },
      { a: "OnTechnology University", correct: false },
    ],
  },
  {
    Question: "What is the first month of the year?",
    Answer: [
      { a: "Febuary", correct: false },
      { a: "January", correct: true },
      { a: "June", correct: false },
      { a: "November", correct: false },
    ],
  },
  {
    Question: "If you freeze water, what do you get?",
    Answer: [
      { a: "Plasma", correct: false },
      { a: "Water", correct: false },
      { a: "Steam", correct: false },
      { a: "Ice", correct: true },
    ],
  },
  {
    Question: "An ____ a day, keeps the doctor away!",
    Answer: [
      { a: "Banana", correct: false },
      { a: "Apple", correct: true },
      { a: "Tomato", correct: false },
      { a: "Salad", correct: false },
    ],
  },
  {
    Question: "How many days are there in a year?",
    Answer: [
      { a: "100", correct: false },
      { a: "285", correct: false },
      { a: "400", correct: false },
      { a: "365", correct: true },
    ],
  },
  {
    Question: "How many legs does a spider have?",
    Answer: [
      { a: "8", correct: true },
      { a: "4", correct: false },
      { a: "10", correct: false },
      { a: "6", correct: false },
    ],
  },
];

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.correctCount = 0;
  }

  handleClick = (correct) => {
    if (correct === true) {
      alert("this answer is correct");
      this.correctCount = this.correctCount + 1;
    } else {
      alert("this answer is not correct");
    }
  };

  returnCorrect() {
    return this.correctCount;
  }

  render() {
    return (
      <div className="Center">
        <h3>Question #1:</h3>
        <div className="question-text">{Questions[0].Question}</div>
        <div className="answer-section">
          {Questions[0].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <h3>Question #2:</h3>
        <div className="question-text">{Questions[1].Question}</div>
        <div className="answer-section">
          {Questions[1].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <h3>Question #3:</h3>
        <div className="question-text">{Questions[2].Question}</div>
        <div className="answer-section">
          {Questions[2].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <h3>Question #4:</h3>
        <div className="question-text">{Questions[3].Question}</div>
        <div className="answer-section">
          {Questions[3].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <h3>Question #5:</h3>
        <div className="question-text">{Questions[4].Question}</div>
        <div className="answer-section">
          {Questions[4].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <h3>Question #6:</h3>
        <div className="question-text">{Questions[5].Question}</div>
        <div className="answer-section">
          {Questions[5].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <h3>Question #7:</h3>
        <div className="question-text">{Questions[6].Question}</div>
        <div className="answer-section">
          {Questions[6].Answer.map((Answer) => (
            <button onClick={() => this.handleClick(Answer.correct)}>
              {Answer.a}
            </button>
          ))}
        </div>
        <br />

        <div>{this.returnCorrect}</div>
      </div>
    );
  }
}
