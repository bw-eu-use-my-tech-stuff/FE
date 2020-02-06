import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import NavBar from './NavBar';

function OwnerRegister(props) {
  const [registrar, setRegistrar] = useState({
    username: "",
    password: "",
    account_type: "owner"
  });

  const changeHandler = event => {
      setRegistrar({
          ...registrar, 
          [event.target.name]: event.target.value
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(registrar.password.length < 8){
      alert('Password must be at least 8 characters long.');
      props.history.push('/register');
    } else{ 
      axios.post('https://use-my-tech-stuff-eu.herokuapp.com/api/auth/register', registrar)
      .then(response => {
        console.log(response);
          props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  return (
    <div>
      <NavBar/>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={event => changeHandler(event)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={event => changeHandler(event)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default OwnerRegister;
