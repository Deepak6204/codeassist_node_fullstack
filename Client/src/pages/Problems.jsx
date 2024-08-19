import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

function Problems() {
  const problemList = [
    { id: 1, title: "Ugly Number II", difficulty: "Medium" },
    { id: 2, title: "Two Sum", difficulty: "Easy" },
    { id: 3, title: "Add Two Numbers", difficulty: "Medium" },
    { id: 4, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 5, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
  ];

  return (
    <>
    <Navbar/>
    <div className="table-container">
      <h1 className="headline-problem"><input type="search" placeholder='Search questions' /></h1>
      <table className="problem-table">
        <thead className="problem-thead">
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problemList.map((problem, index) => (
            <tr
              key={problem.id}
              style={{
                backgroundColor: index % 2 === 0 ? 'black' : 'grey',
                color: 'white',
              }}
            >
              <td className="status solved"></td>
              <td className="td-problm">
                <Link to={`/problems/${problem.id}`} style={{ color: 'inherit' }}>
                  {problem.title}
                </Link>
              </td>
              <td>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Problems;
