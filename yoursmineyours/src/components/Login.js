import React, { useState } from "react";
import "../styles/Login.css";

function Login(props) {
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

  const submitHandler = event => {
      event.preventDefault();
      console.log(user);
      // Here add the object to the backend. 
      // Here redirect the user.
    }

  return (
    <div>
      <form className="loginForm" onSubmit={event => submitHandler(event)}>
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
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
