import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/event.css";
import BugBounty from "../images/Bug-Bounty.webp";

const questions = {
  round1: {
    time: 1800,
    cpp: [
      {
        id: 1,
        code: [
          { line: "let x = 5;", hasBug: false },
          { line: "if (x == 10) {", hasBug: false },
          { line: 'console.log("x is 10");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: true },
          { line: "while (i < 5) {", hasBug: true },
          { line: "", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: false },
          { line: "console.log(y);", hasBug: true },
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true },
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 6,
        code: [
          { line: "if (a = 5) {", hasBug: true },
          { line: 'console.log("a is 5");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 7,
        code: [
          { line: "let unused = 100;", hasBug: true },
          { line: "let value = 50;", hasBug: false },
          { line: "console.log(value);", hasBug: false },
        ],
      },
      {
        id: 8,
        code: [
          { line: "function greet() {", hasBug: false },
          { line: 'console.log("Hello");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 9,
        code: [
          { line: "let divisor = 0;", hasBug: false },
          { line: "let result = 10 / divisor;", hasBug: true },
          { line: "console.log(result);", hasBug: false },
        ],
      },
      {
        id: 10,
        code: [
          { line: "let arr = [];", hasBug: false },
          { line: "for (let i = 0; i < 1000000; i++) {", hasBug: false },
          { line: "arr.push(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
    python: [
      {
        id: 1,
        code: [
          { line: "x = 5;", hasBug: false },
          { line: "if (x == 10) :", hasBug: false },
          { line: 'print("x is 10")', hasBug: false },
          { line: "", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: false },
          { line: "while (i < 5) {", hasBug: false },
          { line: "", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: false },
          { line: "console.log(y);", hasBug: true },
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true },
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 6,
        code: [
          { line: "if (a = 5) {", hasBug: true },
          { line: 'console.log("a is 5");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 7,
        code: [
          { line: "let unused = 100;", hasBug: true },
          { line: "let value = 50;", hasBug: false },
          { line: "console.log(value);", hasBug: false },
        ],
      },
      {
        id: 8,
        code: [
          { line: "function greet() {", hasBug: false },
          { line: 'console.log("Hello");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 9,
        code: [
          { line: "let divisor = 0;", hasBug: false },
          { line: "let result = 10 / divisor;", hasBug: true },
          { line: "console.log(result);", hasBug: false },
        ],
      },
      {
        id: 10,
        code: [
          { line: "let arr = [];", hasBug: false },
          { line: "for (let i = 0; i < 1000000; i++) {", hasBug: false },
          { line: "arr.push(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
    java: [
      {
        id: 1,
        code: [
          { line: "let x = lodu yash;", hasBug: false },
          { line: "if (x == 10) {", hasBug: false },
          { line: 'console.log("x is 10");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: false },
          { line: "while (i < 5) {", hasBug: false },
          { line: "", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: false },
          { line: "console.log(y);", hasBug: true },
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true },
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 6,
        code: [
          { line: "if (a = 5) {", hasBug: true },
          { line: 'console.log("a is 5");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 7,
        code: [
          { line: "let unused = 100;", hasBug: true },
          { line: "let value = 50;", hasBug: false },
          { line: "console.log(value);", hasBug: false },
        ],
      },
      {
        id: 8,
        code: [
          { line: "function greet() {", hasBug: false },
          { line: 'console.log("Hello");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 9,
        code: [
          { line: "let divisor = 0;", hasBug: false },
          { line: "let result = 10 / divisor;", hasBug: true },
          { line: "console.log(result);", hasBug: false },
        ],
      },
      {
        id: 10,
        code: [
          { line: "let arr = [];", hasBug: false },
          { line: "for (let i = 0; i < 1000000; i++) {", hasBug: false },
          { line: "arr.push(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
  },
  round2: {
    time:1200,
    cpp: [
      {
        id: 1,
        code: [
          { line: "let x = 5;", hasBug: false },
          { line: "if (x == 10) {", hasBug: false },
          { line: '  console.log("x is 10");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: false },
          { line: "while (i < 5) {", hasBug: false },
          { line: "  ", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: true }, // Uninitialized variable
          { line: "console.log(y);", hasBug: true }, // Logging undefined variable
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true }, // Reassignment of a constant
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "  console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
    python: [
      {
        id: 1,
        code: [
          { line: "let x = 5;", hasBug: false },
          { line: "if (x == 10) {", hasBug: false },
          { line: '  console.log("x is 10");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: false },
          { line: "while (i < 5) {", hasBug: false },
          { line: "  ", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: true },
          { line: "console.log(y);", hasBug: true },
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true },
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "  console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
    java: [
      {
        id: 1,
        code: [
          { line: "let x = 5;", hasBug: false },
          { line: "if (x == 10) {", hasBug: false },
          { line: '  console.log("x is 10");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: false },
          { line: "while (i < 5) {", hasBug: false },
          { line: "  ", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: true },
          { line: "console.log(y);", hasBug: true },
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true },
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "  console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
    c: [
      {
        id: 1,
        code: [
          { line: "let x = 5;", hasBug: false },
          { line: "if (x == 10) {", hasBug: false },
          { line: '  console.log("x is 10");', hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "let i = 0;", hasBug: false },
          { line: "while (i < 5) {", hasBug: false },
          { line: "  ", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "let y;", hasBug: true },
          { line: "console.log(y);", hasBug: true },
          { line: "y = 20;", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "const a = 5;", hasBug: false },
          { line: "a = 10;", hasBug: true },
          { line: "console.log(a);", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "for (let i = 0; i <= 5; i++) {", hasBug: false },
          { line: "  console.log(i);", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
  },
  round3: {
    time:900,
    "cpp": [
      {
        "id": 1,
        "code": [
          {line: "let x = 5;", hasBug: true},
          {line: "if (x == 10) {", hasBug: false},
          {line: '  console.log("x is 10");', hasBug: false},
          {line: "}", hasBug: false}
        ]
      },
      {
        "id": 2,
        "code": [
          {line: "let i = 0;", hasBug: false},
          {line: "while (i < 5) {", hasBug: false},
          {line: "  ", hasBug: true},
          {line: "}", hasBug: false}
        ]
      }
    ],
    "python": [
      {
        "id": 1,
        "code": [
          {line: "let x = 5;", hasBug: true},
          {line: "if (x == 10) {", hasBug: false},
          {line: '  console.log("x is 10");', hasBug: false},
          {line: "}", hasBug: false}
        ]
      },
      {
        "id": 2,
        "code": [
          {line: "let i = 0;", hasBug: false},
          {line: "while (i < 5) {", hasBug: false},
          {line: "  ", hasBug: true},
          {line: "}", hasBug: false}
        ]
      }
    ],
    "java": [
      {
        "id": 1,
        "code": [
          {line: "let x = 5;", hasBug: true},
          {line: "if (x == 10) {", hasBug: false},
          {line: '  console.log("x is 10");', hasBug: false},
          {line: "}", hasBug: false}
        ]
      },
      {
        "id": 2,
        "code": [
          {line: "let i = 0;", hasBug: false},
          {line: "while (i < 5) {", hasBug: false},
          {line: "  ", hasBug: true},
          {line: "}", hasBug: false}
        ]
      }
    ],
    "c": [
      {
        "id": 1,
        "code": [
          {line: "let x = 5;", hasBug: true},
          {line: "if (x == 10) {", hasBug: false},
          {line: '  console.log("x is 10");', hasBug: false},
          {line: "}", hasBug: false}
        ]
      },
      {
        "id": 2,
        "code": [
          {line: "let i = 0;", hasBug: false},
          {line: "while (i < 5) {", hasBug: false},
          {line: "  ", hasBug: true},
          {line: "}", hasBug: false}
        ]
      }
    ]
  }  
};
const rules = {
  round1: [
    "1. In this round you have 10 Code Snippets.",
    "2. For that you have 30 Minutes.",
    "3. For each snippet, tick the line where you identify a bug.",
    "4. Bug can be a syntax or logical error.",
    "5. You can jump between questions freely within the time frame.",
    "6. Once you start, fullscreen mode will activate, and you can't exit without submission.",
  ],
  round2: [
    "1. In this round you have 5 Question.",
    "2. For that you have 20 Minutes",
  ],
  round3: [
    "1. In this round you have 2 Question.",
    "2. For that you have 10 Minutes",
  ],
};
function Event() {
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedBugs, setSelectedBugs] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showRules, setShowRules] = useState(false);
  const [language, setLanguage] = useState("cpp");
  const [isAnswered, setIsAnswered] = useState({});

  useEffect(() => {
    if (selectedQuestion) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [selectedQuestion]);

  const handleAnswer = (questionId) => {
    setIsAnswered((prev) => ({
      ...prev,
      [questionId]: true, // Mark this question as answered
    }));
  };
  

  const handleRoundSelection = (round) => {
    setSelectedRound(round);
    setShowRules(true);
  };

  const handleOkClick = () => {
    setShowRules(false);
    setSelectedQuestion(questions[selectedRound][language][0]);
    setTimeLeft(questions[selectedRound].time); // Reset timer for the new question
  };

  const handleQuestionSelection = (question) => {
    setSelectedQuestion(question);
    setSelectedBugs([]);
  };

  const handleBugSelection = (lineIndex) => {
    const updatedBugs = selectedBugs.includes(lineIndex)
      ? selectedBugs.filter((index) => index !== lineIndex)
      : [...selectedBugs, lineIndex];
    setSelectedBugs(updatedBugs);
  };

  const handleSubmit = async (selectedQuestion,elapsed_time) => {
    console.log(selectedRound);
    const firebaseId = localStorage.getItem('firebaseId')
    console.log("event firebaseId: ", firebaseId)
    try {
      const response = await fetch('/handle-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedQuestion, selectedBugs , elapsed_time,selectedRound,firebaseId}),
      });

      const result = await response.json();
      console.log("Server response:", result);
      alert(`You selected bugs on lines: ${result.selectedBugs.join(", ")}`);
      handleAnswer(selectedQuestion.id)
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(language)
    if(selectedQuestion.id >= questions[selectedRound][language].length){
      console.log("all questions completed")
    }
      setSelectedQuestion(questions[selectedRound][language][selectedQuestion.id]);
      setSelectedBugs([]);
  };

  return (
    <>
      <div className="app-container">
        {!selectedRound ? (
          <div style={{ display: "flex" }}>
            <div className="side-design">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="round-selection">
              <div class="wrapper">
                <p class="neon-text" data-text="Techvaganza 2024">
                  Techvaganza 2024
                </p>
              </div>
              <div class="wrapper five">
                <span class="float-box">
                  <h3 class="float bug">BUG BOUNTY</h3>
                </span>
              </div>

              <div className="heading">
                <h4>
                  Powered By <span className="code_assist">Code Assist</span>
                </h4>
              </div>
              <div>
                <h1 style={{ fontFamily: "cursive", marginTop: "0px" }}>
                  Let's Start
                </h1>
                <button onClick={() => handleRoundSelection("round1")}>
                  Round 1
                </button>
                <button onClick={() => handleRoundSelection("round2")}>
                  Round 2
                </button>
                <button onClick={() => handleRoundSelection("round3")}>
                  Round 3
                </button>
              </div>
            </div>
            <div className="side-design">
              <div className="circle" />
              <div className="line" />
            </div>
          </div>
        ) : (
          <div>
            {showRules ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  height: "100vh",
                  margin: "0px",
                }}
              >
                <div>
                  <img
                    style={{ marginRight: "40px", marginTop: "70px" }}
                    src={BugBounty}
                    alt="#"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "18px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    "Unleash your skills and conquer the bugs - the challenge
                    awaits!"
                  </p>
                </div>
                <div style={{ marginTop: "70px" }} className="rules-popup">
                  <div>
                    <h2
                      style={{
                        textAlign: "center",
                        borderBottom: "2px solid",
                        fontSize: "30px",
                        marginTop: "0",
                      }}
                    >
                      Rules
                    </h2>
                    {rules[selectedRound].map((rule, index) => (
                      <p key={index}>{rule}</p>
                    ))}
                    <p></p>
                    <label htmlFor="">
                      Select Language :
                      <select
                        className="lang"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                      >
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="c">C</option>
                      </select>
                    </label>
                  </div>
                  <button onClick={handleOkClick}>Start</button>
                </div>
              </div>
            ) : (
              <div className="main-content">
                <div className="question-list">
                  <h2>Questions</h2>
                  {questions[selectedRound][language].map((question) => (
                    <button
                      key={question.id}
                      onClick={() => handleQuestionSelection(question)}
                      disabled={isAnswered[question.id] ? true : false}
                      className={`${selectedQuestion?selectedQuestion.id === question.id ? 'selected' : '':''} ${isAnswered[question.id] ? 'answered':''}`}
                    >
                      {question.id}
                    </button>
                  ))}
                </div>

                {selectedQuestion && (
                  <div className="code-section">
                    <div className="timer">
                      <h3>Time left: {Math.floor(timeLeft/60)}min {timeLeft-(Math.floor(timeLeft/60)*60)}s</h3>
                    </div>
                    <h3>Code Snippet for Question {selectedQuestion.id}</h3>
                    <div className="code-snippet">
                      {selectedQuestion.code.map((line, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            checked={selectedBugs.includes(index)}
                            onChange={() => handleBugSelection(index)}
                          />
                          <span>{line.line}</span>
                        </div>
                      ))}
                    </div>
                    <button className="submit-button" onClick={() => handleSubmit(selectedQuestion,questions[selectedRound].time - timeLeft)}>
                      Submit
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Event;
