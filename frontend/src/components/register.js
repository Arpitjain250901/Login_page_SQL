// import "./register.css"
// import React, { Fragment ,useState} from 'react';
// import axios from "axios";
// import {validate} from "./validate.js"
// import {Link, useNavigate} from 'react-router-dom';



// export function Register()  {

 

//   let navigate = useNavigate();


//     const [user,setuser]=useState({
  
//        Username:"",
//        Password:"",
//        Email:""
//     });
  
//     const {Username,Email,Password}=user;
    
//     const[Confirm_Password,setConfirm_password]=useState("");
//     const[text,settext]=useState("");
//     const [error,seterror]=useState("");
   
    
  
   
  
  
//   const registersubmit = async (e) => {
//     e.preventDefault();
//     console.log("User State:", user);
  
//     try {


//         seterror(validate(user));
        
//         if(user.Password !== Confirm_Password)
//         {
//             settext("Passwords Not Matched");;
//         }
//         else if(error===""){

        
        
         
   
//       const response = await axios.post(`http://localhost:8081/createUser`,user //{
       
//       );
//     }
  
     
    
    


//  }catch (error) {
//       console.error("An error occurred during registration:", error);
//     }
//   };
  
  
  
  
  
  
  
//     const registerdatachange=(e) => {
        
//       setuser({ ...user, [e.target.name]: e.target.value });
    
  
//     }
  
   
//     const navigateToLogin=(e) => {
//       navigate("/");
//  }
  
   
  
  
//       return (
                
                
                
//                 <Fragment>
//                             <div >
//                      <form  id="formele" className="registerform" encType="multipart/form-data" >
//                      <input
//                       type="text"
//                       placeholder="Enter Username Name*"
//                       required
//                       name="Username"
//                       value={Username}
//                       onChange={registerdatachange}
//                     />
  
//                     <input
//                       type="password"
//                       placeholder="Password"
//                       required
                      
//                       name="Password"
//                       value={Password}
//                       onChange={registerdatachange}
//                     />

                  

//                     <input
//                       type="password"
//                       placeholder="Confirm Password"
//                       required
                      
//                       name="Confirm_Password"
//                       value={Confirm_Password}
//                       onChange={(e) => setConfirm_password(e.target.value)}
//                     />
  
//                     <input
//                       type="text"
//                       placeholder="Enter Email"
//                       required
                      
//                       name="Email"
//                       value={Email}
//                       onChange={registerdatachange}
  
  
//                     />

  
 
  
  

  
  
  
  
  
//                      </form>
  
//   <button onClick={registersubmit}>Register</button>
//   {text && <p>{text}</p>}
//   {error && <p>{error.email} {error.password}</p>}
//   <p>Existing User? <button onClick={navigateToLogin}>Log in</button></p>
  
//                             </div>
       
  
//                    </Fragment>
  
  
  
  
//       );
  
//       }


// Register.js






import "./register.css";
import React, { Fragment, useState } from 'react';
import axios from "axios";
import { validate } from "./validate.js";
import {useNavigate } from 'react-router-dom';

export function Register() {

  let navigate = useNavigate();

  const [user, setuser] = useState({
    Username: "",
    Password: "",
    Email: ""
  });

  const { Username, Email, Password } = user;
  const [Confirm_Password, setConfirm_password] = useState("");
  const [text, settext] = useState("");
  const [error, seterror] = useState("");

  const registersubmit = async (e) => {
    e.preventDefault();
    

    try {
      seterror(validate(user));

      if (user.Password !== Confirm_Password) {
        settext("Passwords Not Matched");
        setConfirm_password("");
      } else if (error === "") {
        const response = await axios.post(`http://localhost:8081/createUser`, user);
        console.log(response);
        if (response.status === 201) {
          navigate("/");
        }
        
        
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

 // arpitjain123
 //xyz@123!45

  const registerdatachange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const navigateToLogin = (e) => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="container">
        <form id="formele" className="registerform" encType="multipart/form-data">
          <input
            type="text"
            placeholder="Enter Username Name*"
            required
            name="Username"
            value={Username}
            onChange={registerdatachange}
          />

          <input
            type="password"
            placeholder="Password"
            required
            name="Password"
            value={Password}
            onChange={registerdatachange}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="Confirm_Password"
            value={Confirm_Password}
            onChange={(e) => setConfirm_password(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Email"
            required
            name="Email"
            value={Email}
            onChange={registerdatachange}
          />
        </form>

        <button onClick={registersubmit}>Register</button>
        {text && <p className="error-message">{text}</p>}
        {error && <p className="error-message">{error.email} {error.password}</p>}
        <p>Existing User? <button onClick={navigateToLogin}>Log in</button></p>
      </div>
    </Fragment>
  );
}
