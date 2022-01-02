import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>
       <center><h2>SignUp page</h2> </center>
       <center> <p>You must register a username and password to log in </p> </center>
       <center><input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input> </center>
      
      <br />
      <center> <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input></center>
      
      <br />
      <center><input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input></center><br />
      {/* Login web form  */}
      <center><button onClick={register}>Register</button></center>
    </>
  );
};

export default SignUpPage;