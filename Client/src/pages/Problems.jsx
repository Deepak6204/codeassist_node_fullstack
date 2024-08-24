import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loader from "../components/Loader";
import './css/problem.css'
function Problems() {
  const [problemList, setProblemList] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("/problems");
        setProblemList(response.data.problems);
        setFilteredProblems(response.data.problems);
      } catch (err) {
        setError("Error fetching problems: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  useEffect(() => {
    filterProblems();
  }, [searchTerm, statusFilter]);

  const filterProblems = () => {
    let updatedList = problemList;
  
    if (searchTerm) {
      updatedList = updatedList.filter((problem) =>
        problem.name && problem.name.includes(searchTerm)
      );
    }
  
    if (statusFilter !== "All") {
      updatedList = updatedList.filter(
        (problem) => problem.status === statusFilter
      );
    }
  
    setFilteredProblems(updatedList);
  };
  

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="table-container">
        <div className="header-controls">
          <input
            type="search"
            placeholder="Search questions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Solved">Solved</option>
            <option value="Attempted">Attempted</option>
            <option value="Unattempted">Unattempted</option>
          </select>
        </div>
        <table className="problem-table">
          <thead className="problem-thead">
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map((problem, index) => (
              <tr
                key={problem.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "black" : "grey",
                  color: "white",
                }}
              >
                <td className={`status ${problem.status}`}></td>
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
