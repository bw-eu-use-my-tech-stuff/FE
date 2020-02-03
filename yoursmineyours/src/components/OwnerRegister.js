import React, { useState } from "react";
import "../styles/Login.css";

function OwnerRegister(props) {
  const [registrar, setRegistrar] = useState({
    email: "",
    password: "",
    name: ""
  });

  const changeHandler = event => {
      setUser({
          ...registrar, 
          [event.target.name]: event.target.value
      });
  };
  
  const goToRegister = event => {

    //Redirect to the register page. 
  }

  const register = event => {
      event.preventDefault();
      console.log(user);
      // Here add the object to the backend. 
      // Here redirect the user.
    }

  return (
    <div>
      <form className="loginForm">
        <label>Email:</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={event => changeHandler(event)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={event => changeHandler(event)}
        />

        <label>Name</label>
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
