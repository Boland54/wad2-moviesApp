import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";


const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return  (

  

    <>
    
      <h1><center>Please login to continue</center></h1>
      <center><input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input></center><br />
      <center><input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input></center><br />
      {/* Login web form  */}



      
      <center><button onClick={login} id="login-button">Log in</button></center>
      <center><i><p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p></i></center>
    </>
  );
};

export default LoginPage;