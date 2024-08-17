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
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/coming_soon">ABOUT</Link></li>
                <li><Link to="/quiz">PRACTICE</Link></li>
                <li><Link to="/quiz">CONTESTS</Link></li>
                <li><Link to="/notes">NOTES</Link></li>
                <li className="user-dropdown">
                    <a href="#" id="user-dropdown-toggle" onClick={toggleDropdown}>
                        <FaUser />  {/* Using the IoLogIn icon */}
                    </a>
                    {isDropdownOpen && (
                        <ul id="user-dropdown-menu">
                            <li id="signup-option"><Link to={`/${name}`}>{name}</Link></li>
                            <li id="logout-option"><Link to={`/${isLogged}`}>{isLogged}</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
