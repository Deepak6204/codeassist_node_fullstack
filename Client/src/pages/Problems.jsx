import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loader from "../components/Loader";

function Problems() {
  const [problemList, setProblemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("/problems");
        setProblemList(response.data.problems);
      } catch (err) {
        setError("Error fetching problems: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="table-container">
        <h1 className="headline-problem">
          <input type="search" placeholder="Search questions" />
        </h1>
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
                  backgroundColor: index % 2 === 0 ? "black" : "grey",
                  color: "white",
                }}
              >
                <td className="status solved"></td>
                <td className="td-problm">
                  <Link
                    to={`/problems/${problem.id}`}
                    style={{ color: "inherit" }}
                  >
                    {problem.name}
                  </Link>
                </td>
                <td>{problem.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Problems;
