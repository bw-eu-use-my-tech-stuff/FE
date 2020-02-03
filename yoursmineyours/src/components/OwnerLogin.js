import React, { useState } from "react";
import "../styles/Login.css";

function OwnerLogin(props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const changeHandler = event => {
      setUser({
          ...user, 
          [event.target.name]: event.target.value
      });
  };
  
  const goToRegister = event => {

    //Redirect to the register page. 
  }

  const submitHandler = event => {
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
          placeholder="email"
          name="email"
          onChange={event => changeHandler(event)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={event => changeHandler(event)}
        />
        <button onClick={event => submitHandler(event)}>Login</button>
        <button onClick={event => goToRegister(event)} >Need to Register?</button>
      </form>
    </div>
  );
}

export default OwnerLogin;
