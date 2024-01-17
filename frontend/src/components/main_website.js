import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainwebsite.css'; 

export function Mainwebsite() {
  let navigate = useNavigate();

 

  const logout = () => {
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('tokenExpiration');
   
    navigate("/");
  };

  useEffect(() => {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
      logout();
    }
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Home Page</h1>
      </div>

      <div className="content">
        <p>Welcome to the main website. You have been redirected after login.</p>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
