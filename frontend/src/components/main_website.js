
// import React, {useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


// export function Mainwebsite() {


//    let navigate = useNavigate();


//    const [user, setuser] = useState({
//       Username: "",
//       Password: "",
//     });
  
    

//     const logout = () => {
//       localStorage.removeItem('authenticatedUser');
//       localStorage.removeItem('tokenExpiration');
//       setuser({
//         Username: "",
//         Password: "",
//       });
//       navigate("/");
//     };

//     useEffect(() => {
//       const expirationTime = localStorage.getItem('tokenExpiration');
//       if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
//         // Token has expired, clear local storage
//         logout();
//       }
//     }, []);

//    return (
//                 <div>

//           <h1>

//              Home Page of main webite where user have been redirect after login.
   

//            <button onClick={logout}>Logout</button>


//           </h1>



//                 </div>






//    );


// }

// Mainwebsite.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainwebsite.css'; // Import the external CSS file

export function Mainwebsite() {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    Username: "",
    Password: "",
  });

  const logout = () => {
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('tokenExpiration');
    setuser({
      Username: "",
      Password: "",
    });
    navigate("/");
  };

  useEffect(() => {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
      // Token has expired, clear local storage
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
