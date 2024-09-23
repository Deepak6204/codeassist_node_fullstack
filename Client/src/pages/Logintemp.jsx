import React, { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebaseConfig.js';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log('User:', result.user);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
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
