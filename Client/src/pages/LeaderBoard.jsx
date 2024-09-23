
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/leaderboard.css";
import React, { useEffect, useState } from 'react';

const LeaderBoard = () => {
  const [data, setData] = useState([]);

  // Fetch the leaderboard data
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const result = [
        { username: 'Alice', score: 250 },
        { username: 'Bob', score: 200 },
        { username: 'Charlie', score: 180 },
        { username: 'David', score: 160 },
        { username: 'Eve', score: 150 },
      ];
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
       <Navbar/>
      <div className="leaderboard_container">
      <div className="leaderboard_main_heading">
        <button>Round-1</button>
        <button>Round-1</button>
        <button>Round-1</button>
      </div>

      <div className="leaderboard_heading">
        <h4>#Rank</h4>
        <h4>Name</h4>
        <h4>Points</h4>
      </div>

      {/* Mapping over the leaderboard data */}
      {data.map((user, index) => (
        <div className="leader_boxes" key={index}>
          <div className="leader_result">
            {/* Conditional rendering for rank icons */}
            {index === 0 ? (
              <h4>🥇</h4>
            ) : index === 1 ? (
              <h4>🥈</h4>
            ) : index === 2 ? (
              <h4>🥉</h4>
            ) : (
              <h4>{index + 1}</h4> // Display rank number
            )}

            <h4 className="name">{user.username}</h4>
            <h4>{user.score}</h4>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default LeaderBoard;

