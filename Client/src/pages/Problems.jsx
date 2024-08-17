import React from 'react';
import { Link } from 'react-router-dom';

function Problems() {
  const problemList = [1, 2, 3,4,5]; // Example problem IDs; this can be fetched from an API as well

  return (
    <div>
      <h1>Problems</h1>
      <p>Select a problem to view the details:</p>
      <ul className="list-group">
        {problemList.map(problemId => (
          <li key={problemId} className="list-group-item">
            <Link to={`/problems/${problemId}`}>Problem {problemId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problems;
