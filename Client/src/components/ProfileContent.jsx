import React from 'react';
// import './ProfileContent.css';

const ProfileContent = () => {
    return (
        <div className="profile-content">
            <div className="prof-cont-1">
                <h3>Basic Info</h3>
                <div className="info-group">
                    <p>Name Sumit Kumar <button>Edit</button></p>
                    <p>Gender Male <button>Edit</button></p>
                    <p>Location India, Bihar, Muzaffarpur <button>Edit</button></p>
                    <p>Birthday December 8, 2002 <button>Edit</button></p>
                    <p>Summary <button>Edit</button></p>
                    <p>Website <button>Edit</button></p>
                    <p>Linkedln <button>Edit</button></p>
                    <p>Github <button>Edit</button></p>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;
