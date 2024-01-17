import  mysql from "mysql";


const db = mysql.createPool({
    connectionLimit: 100,
    host: "127.0.0.1",       //This is your localhost IP
    user: "kumkum",         // "newuser" created in Step 1(e)
    password: "password#123",  // password for the new user
    database: "userdb",      // Database name
    port: "3306"             // port name, "3306" by default
 })
 
 

 
 export default db;