import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path based on your folder structure
import Home from './pages/Home'; // Component for the home page
import About from './pages/About'; // Component for the about page
import Quiz from './pages/Quiz'; // Component for the quiz page
import Notes from './pages/Notes'; // Component for the notes page
import LeaderBoard from './pages/LeaderBoard'; // Component for the leaderboard page
import Logout from './pages/Logout'; // Component for the logout page
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import Problems from './pages/Problems';
import ProblemDetails from './components/ProblemDetails';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coming_soon" element={<About />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/notes" element={<Notes />} />
                <Route exact path="/problems" element={<Problems />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="/:isLogged" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/problems/:id" element={<ProblemDetails/>} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/edit-profile" element={<EditProfile/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;
