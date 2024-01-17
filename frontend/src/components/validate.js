export function validate(user)  {

    const error={};
       const email=user.Email;
       const password=user.Password;
       
       const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       const password_pattern=/^(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  
       if(email==="")
       {
          error.email="email should not be empty"
       }
       else if(!email_pattern.test(email))
       {
          error.email="Email Didnt match"
       }
       else{
          error.email="";
       }
  
       if(password==="")
       {
          error.password="empty password is not allowed"
       }
       else if(!password_pattern.test(password))
       {
          error.password="password should contain at least one unique character and ---";
       }
       else {
          error.password="";
       }
  
  
       return error;
  }