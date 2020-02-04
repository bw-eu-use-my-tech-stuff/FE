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
  
  const submitHandler = event => {
      event.preventDefault();
      // Here add the object to the backend. 
    }

    const goToRegister = event => { 
      event.preventDefault();
      props.history.push('/register');
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
        <button onClick={submitHandler}>Login</button>
        <button onClick={event => goToRegister(event)}>Need to Register</button>
      </form>
    </div>
  );
}



export default OwnerLogin;
