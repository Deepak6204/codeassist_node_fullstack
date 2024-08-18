import React from 'react';
// import './ProfileHeader.css';

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <img src="profile-image-url" alt="Profile" className="profile-image" />
            <div className="profile-details">
                <h2>Sumit Kumar</h2>
                <p>LeetCode ID: Sumit_1911</p>
            </div>
        </div>
    );
};

export default ProfileHeader;