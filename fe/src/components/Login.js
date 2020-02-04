import React, { useState } from "react";
import "../styles/tachyon.css";
import { Link } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const changeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className="pa4 black-80">
      <form>
        <label className="db fw4 lh-copy f6">Email</label>
        <input
          className="pa2 input-reset ba bg-transparent w-100 measure"
          type="email"
          name="email"
          onChange={changeHandler}
          value={user.email}
          required
        />
        <label className="db fw4 lh-copy f6">Password</label>
        <input
          className="pa2 input-reset ba bg-transparent w-100 measure"
          type="password"
          name="password"
          onChange={changeHandler}
          value={user.password}
          required
        />
        <div className="mt3">
          <button
            onClick={event => submitHandler(event)}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
          >
            Login
          </button>
          <Link to="/register">
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6">
              Register Today
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
