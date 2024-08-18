import React from 'react';
// import './ProfileContent.css';

const ProfileContent = () => {
    return (
        <div className="profile-content">
           <div className="basic-info-container">
                <h3 className="basic-info-title">Basic Info</h3>
                <div className="basic-info-item">
                    <span className="basic-info-label">Name</span>
                    <span className="basic-info-value">Enter Your Name</span>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="basic-info-item">
                    <span className="basic-info-label">Gender</span>
                    <span className="basic-info-value">Enter Your Gender</span>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="basic-info-item">
                    <span className="basic-info-label">Location</span>
                    <span className="basic-info-value">Enter Your Place</span>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="basic-info-item">
                    <span className="basic-info-label">Birthday</span>
                    <span className="basic-info-value"><input type="date" className='date-input' /></span>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="basic-info-item">
                    <span className="basic-info-label">Website</span>
                    <span className="basic-info-value">Your Blog or Portfolio</span>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="basic-info-item">
                    <span className="basic-info-label">Github</span>
                    <span className="basic-info-value">Your Github URL or Username</span>
                    <button className="edit-button">Edit</button>
                </div>
                <div className="basic-info-item">
                    <span className="basic-info-label">Linkedln</span>
                    <span className="basic-info-value">Your Linkedln URL or Username</span>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;
