import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";

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
    console.log(event);
    axios.post('https://use-my-tech-stuff-eu.herokuapp.com/api/auth/register', registrar)
    .then(response => {
      console.log(response);
      props.history.push('/login');


    })
    .catch(error => {
      console.log(error);
    })
  }

  // const register = event => {
  //     event.preventDefault();
      // props.history.push('/login');
  //   }

  return (
    <div>
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

        {/* <label>Account Type:</label>
        <input 
        type="text"
        placeholder="Name"
        name="name"
        onChange={event => changeHandler(event)}
        /> */}
{/* 
        <select onChange={changeHandler}> Account Type:
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
        </select> */}

        <button>Register</button>
      </form>
    </div>
  );
}

export default OwnerRegister;
