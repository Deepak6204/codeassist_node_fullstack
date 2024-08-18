import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import checklogo from '../images/checklogo.png';
import { FaUser } from "react-icons/fa";

const Navbar = ({ name, isLogged }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="navbar">
            <Link to="/" className="logo1">
                <img src={checklogo} alt="checklogo" />
            </Link>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fa fa-bars"></i>
            </label>
            <ul>
                <li><Link to="/problems">PROBLEMS</Link></li>
                <li><Link to="/quiz">CONTESTS</Link></li>
                <li><Link to="/quiz">IDEA-PITCHING</Link></li>
                <li><Link to="/quiz">PROJECTS</Link></li>
                <li><Link to="/quiz">ROADMAPS</Link></li>
                <li><Link to="/notes">NOTES</Link></li>
                <li className="user-dropdown">
                    <Link to="/profile"> <FaUser /> </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
