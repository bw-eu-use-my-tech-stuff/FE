import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import NavBar from './NavBar';

function OwnerLogin(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    account_type: "owner",
  });

  const changeHandler = event => {
      setUser({
          ...user, 
          [event.target.name]: event.target.value
      });
  };
  
  const submitHandler = event => {
      event.preventDefault();
      axios
      .post('https://use-my-tech-stuff-eu.herokuapp.com/api/auth/login', user)
      .then(response => {
        console.log(response);
        props.history.push('/ownerDashboard');
      })
      .catch(error => {
        console.log(error);
      });
    };

    const goToRegister = event => { 
      event.preventDefault();
      props.history.push('/register');
    }

  return (
    <div>
      <NavBar/>
      <form className="loginForm">
        <h1>Login:</h1>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Username:"
          name="username"
          onChange={event => changeHandler(event)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={event => changeHandler(event)}
        />
        <button onClick={submitHandler}>Login</button>
        <button onClick={event => goToRegister(event)}>Need to Register?</button>
      </form>
    </div>
  );
}




export default OwnerLogin;
