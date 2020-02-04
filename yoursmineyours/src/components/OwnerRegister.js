import React, { useState } from "react";
import "../styles/Login.css";

function OwnerRegister(props) {
  const [registrar, setRegistrar] = useState({
    username: "",
    password: "",
    account_type: ""
  });

  const changeHandler = event => {
      setRegistrar({
          ...registrar, 
          [event.target.name]: event.target.value
      });
  };

  const register = event => {
      event.preventDefault();
      props.history.push('/login');
      // Here add the object to the backend. 
    }

  return (
    <div>
      <form className="loginForm">
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={event => changeHandler(event)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={event => changeHandler(event)}
        />

        <label>Account Type:</label>
        <input 
        type="text"
        placeholder="Name"
        name="name"
        onChange={event => changeHandler(event)}
        />
        <button onClick={event => register(event)}>Register</button>
      </form>
    </div>
  );
}

export default OwnerRegister;
