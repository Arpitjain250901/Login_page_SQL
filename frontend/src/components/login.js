// // import "./login.css"
// // import React, { Fragment ,useState} from 'react';
// // import {Link, useNavigate} from 'react-router-dom';
// // import axios from "axios";




// // export function Login()  {

 
// //   let navigate = useNavigate();
  


// //     const [user,setuser]=useState({
  
// //        Username:"",
// //        Password:"",
      
      
// //     });
  
// //     const {Username,Password}=user;
    
    
// //     const[text,settext]=useState("");
    
  
   
  
  
// //   const Loginsubmit = async (e) => {
// //     e.preventDefault();
   
  
// //     try {
// //              const response = await axios.post(`http://localhost:8081/login`,user);
             
// //             //console.log(user.Username);
// //              // if response.data is not logged in then i will show a meesgae otherwise i will navigate it to another page
// //              settext(response.data);
             

// //             if(response.data===`${user.Username} is logged in!`)
// //             {

// //               // Save the authenticated user in local storage
// //         localStorage.setItem('authenticatedUser', JSON.stringify(user));

// //         // Set a token expiration time (e.g., 2 days)
// //         const expirationTime = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
// //         const expirationDate = new Date().getTime() + expirationTime;
// //         localStorage.setItem('tokenExpiration', expirationDate);
// //               navigate("/Home")
// //               alert("Login Succesful")
// //             }
            
   
// //     //Arpit@123456!


// //  }catch (error) {
      
         
// //     if (error.response) {
// //         console.error("Server responded with an error status:", error.response.status);
// //         console.error("Response data:", error.response.data);
// //     } else if (error.request) {
// //         console.error("No response received from the server");
// //     } else {
// //         console.error("Error during request setup:", error.message);
// //     }
   
   
   
   
// //    }







// //   };
  
  
  
  
  
  
  
// //     const logindata=(e) => {
        
// //       setuser({ ...user, [e.target.name]: e.target.value });
    
  
// //     }
  
   
// //   const navigateToRegister=(e) => {
// //        navigate("/register");
// //   }
   
  
  
// //       return (
                
                
                
// //                 <Fragment>
// //                             <div >
// //                      <form  id="formel" className="Loginform" encType="multipart/form-data" >
// //                      <input
// //                       type="text"
// //                       placeholder="Enter Username or Email"
// //                       required
// //                       name="Username"
// //                       value={Username}
// //                       onChange={logindata}
// //                     />
  
// //                     <input
// //                       type="password"
// //                       placeholder="Password"
// //                       required
                      
// //                       name="Password"
// //                       value={Password}
// //                       onChange={logindata}
// //                     />

// //                      </form>
  
// //   <button onClick={Loginsubmit}>Login</button>
// //   {text && <p>{text}</p>}
  
// //   <p>Existing User? Log in</p>

// //   <p>Dont have account ?<button onClick={navigateToRegister}>sign in</button></p>
  
// //                             </div>
       
  
// //                    </Fragment>
  
  
  
  
// //       );
  
// //       }




// import "./login.css";
// import React, { Fragment, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import bcrypt from "bcryptjs";

// export function Login() {
//   let navigate = useNavigate();

//   const [user, setuser] = useState({
//     Username: "",
//     Password: "",
//   });

//   const { Username, Password } = user;
//   const [text, settext] = useState("");

//   useEffect(() => {
    
//     const storedUser = localStorage.getItem('authenticatedUser');
//     if (storedUser) {
//       navigate("/Home");
//     }
//   }, [navigate]);

//   const Loginsubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:8081/login`, user);

//       settext(response.data);

//       if (response.data === `${user.Username} is logged in!`) {
        
//         const hashedPassword = await bcrypt.hash(user.Password, 10);
//         localStorage.setItem('authenticatedUser', JSON.stringify({
//           Username: user.Username,
//           Password: hashedPassword,
//         }));

       
//         const expirationTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; 
//         localStorage.setItem('tokenExpiration', expirationTime);

//         navigate("/Home");
//         alert("Login Successful");
//       }
//     } catch (error) {
      
//       if (error.response) {
//         console.error("Server responded with an error status:", error.response.status);
//         console.error("Response data:", error.response.data);
//       } else if (error.request) {
//         console.error("No response received from the server");
//       } else {
//         console.error("Error during request setup:", error.message);
//       }
//     }
//   };

//   const logindata = (e) => {
//     setuser({ ...user, [e.target.name]: e.target.value });
//   };

//   const navigateToRegister = () => {
//     navigate("/register");
//   };

//   return (
//     <Fragment>
//       <div>
//         <form>
//           <input
//             type="text"
//             placeholder="Enter Username or Email"
//             required
//             name="Username"
//             value={Username}
//             onChange={logindata}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             name="Password"
//             value={Password}
//             onChange={logindata}
//           />
//         </form>

//         <button onClick={Loginsubmit}>Login</button>
//         {text && <p>{text}</p>}

//         <p>Existing User? Log in</p>
//         <p>Don't have an account? <button onClick={navigateToRegister}>Sign in</button></p>
//       </div>
//     </Fragment>
//   );
// }

//   //Arpit@123456!


// Login.js

import "./login.css";
import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import bcrypt from "bcryptjs";

export function Login() {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    Username: "",
    Password: "",
  });

  const { Username, Password } = user;
  const [text, settext] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem('authenticatedUser');
    if (storedUser) {
      navigate("/Home");
    }
  }, [navigate]);

  const Loginsubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8081/login`, user);

      settext(response.data);

      if (response.data === `${user.Username} is logged in!`) {
        const hashedPassword = await bcrypt.hash(user.Password, 10);
        localStorage.setItem('authenticatedUser', JSON.stringify({
          Username: user.Username,
          Password: hashedPassword,
        }));

        const expirationTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
        localStorage.setItem('tokenExpiration', expirationTime);

        navigate("/Home");
        alert("Login Successful");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error status:", error.response.status);
        console.error("Response data:", error.response.data);
        settext("Invalid username or password");
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error during request setup:", error.message);
      }
    }
  };

  const logindata = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <Fragment>
      <div className="container">
        <form>
          <input
            type="text"
            placeholder="Enter Username or Email"
            required
            name="Username"
            value={Username}
            onChange={logindata}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="Password"
            value={Password}
            onChange={logindata}
          />
          <button onClick={Loginsubmit}>Login</button>
          {text && <p className="error-message">{text}</p>}
          <p>Existing User? Log in</p>
          <p>Don't have an account? <button onClick={navigateToRegister}>Sign in</button></p>
        </form>
      </div>
    </Fragment>
  );
}
