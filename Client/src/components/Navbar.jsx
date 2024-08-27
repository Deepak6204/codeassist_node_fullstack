import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import checklogo from '../images/checklogo.png';
import { FaUser } from "react-icons/fa";
// import '../index.css'
// import '../abc.css';
const Navbar = ({ name, isLogged }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="navbar" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Link to="/" className="logo1">
                <img src={checklogo} alt="checklogo" />
            </Link>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fa fa-bars"></i>
            </label>
            <ul style={{marginBottom: "0"}}>
                <li><Link to="/problems">PROBLEMS</Link></li>
                <li><Link to="/contest">CONTESTS</Link></li>
                <li><Link to="/idea-pitch">IDEA-PITCHING</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/roadmaps">ROADMAPS</Link></li>
                <li><Link to="/notes">NOTES</Link></li>
                <li className="user-dropdown">
                    <Link to="/profile"> <FaUser style={{marginBottom: "6px"}} /> </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
