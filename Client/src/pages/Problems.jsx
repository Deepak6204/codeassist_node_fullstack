import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import Loader from "../components/Loader";
<<<<<<< HEAD
import "../style/problem.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { IoSearch } from "react-icons/io5";


=======
import './css/problem.css'
>>>>>>> bdf7be50785c8b5b464b54eb7d72a27910d1b4e0
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
<<<<<<< HEAD
        <div className="headline-content">
          <div>
          <Form.Control type="text" placeholder="Search Questions" 
                style={{
                  background: '#5e5e5e',
                  border: 'none',
                  color: 'white !important',
                  fontWeight: '500',
                }} id="search-problem"/>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"
              style={{
                background: '#5e5e5e ',
                fontWeight: '500',
                border: 'none'
                
              }}>
                Status
              </Dropdown.Toggle>
              <Dropdown.Menu
              style={{
                background: '#5e5e5e ',
                fontWeight: '500',
                border: 'none'
                
              }}>
                <Dropdown.Item href="#/action-1">Todo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Solved</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Attempted</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                background: '#5e5e5e',
                fontWeight: '500',
                border: 'none'
              }}>
                Difficulty
              </Dropdown.Toggle>
              <Dropdown.Menu
              style={{
                background: '#5e5e5e ',
                fontWeight: '500',
                border: 'none'
                
              }}>
                <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Hard</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
=======
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
>>>>>>> bdf7be50785c8b5b464b54eb7d72a27910d1b4e0
        </div>
        <table className="problem-table">
          <thead className="problem-thead">
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Difficulty</th>
            </tr>
          </thead>
<<<<<<< HEAD
          <tbody style={{background : 'transparent'}}>
            {problemList.map((problem, index) => (
=======
          <tbody>
            {filteredProblems.map((problem, index) => (
>>>>>>> bdf7be50785c8b5b464b54eb7d72a27910d1b4e0
              <tr
                key={problem.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "grey" : "black",
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
      <Footer/>
    </>
  );
}

export default Problems;
