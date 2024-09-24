import React, { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebaseConfig.js';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;

      // Set user in state
      setUser(userData);
      console.log('User:', userData);

      // Send user data to your backend
      await sendUserDataToBackend(userData);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const sendUserDataToBackend = async (userData) => {
    const { uid, email, displayName } = userData;

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firebaseId: uid,
          email,
          name: displayName || 'Anonymous',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save user data');
      }

      const data = await response.json();
      localStorage.setItem('firebaseId', uid);
      console.log("hi",localStorage.getItem('firebaseId'));
      console.log('User data stored in database:', data);
    } catch (error) {
      console.error('Error sending user data:', error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.displayName}</h1>
          <img src={user.photoURL} alt={user.displayName} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login with Google</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
