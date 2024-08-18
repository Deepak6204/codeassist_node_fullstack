import React from 'react';
import { Link } from 'react-router-dom';

function Problems() {
  const problemList = [
    { id: 1, title: "Ugly Number II", difficulty: "Medium" },
    { id: 2, title: "Two Sum", difficulty: "Easy" },
    { id: 3, title: "Add Two Numbers", difficulty: "Medium" },
    { id: 4, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 5, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { id: 3, title: "Add Two Numbers", difficulty: "Medium" },
    { id: 4, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 5, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { id: 3, title: "Add Two Numbers", difficulty: "Medium" },
    { id: 4, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 5, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
  ];

  return (
    <div className="table-container">
      <h1 className="headline-problem">Problems</h1>
      <table className="problem-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problemList.map(problem => (
            <tr key={problem.id} className={problem.difficulty.toLowerCase()}>
              <td className="status solved"></td>
              <td><Link to={`/problems/${problem.id}`} >{problem.title}</Link></td>
              <td>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Problems;
