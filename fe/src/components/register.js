import React, { useState } from "react";
import "../styles/tachyon.css";
import Footer from "./footer";

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addUser(user);
  };
  return (
    <div className="pa4 black-80">
      <form>
        <div className="mt3">
          <label className="db fw4 lh-copy f">Username</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure"
            type="text"
            name="username"
            onChange={changeHandler}
            value={user.username}
            required
          />
          <div className="mt3">
            <label className="db fw4 lh-copy f">Email</label>
            <input
              className="pa2 input-reset ba bg-transparent w-100 measure"
              type="email"
              name="email"
              onChange={changeHandler}
              value={user.username}
              required
            />
            <div className="mt3">
              <label className="db fw4 lh-copy f">Password</label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="password"
                name="password"
                onChange={changeHandler}
                value={user.password}
                required
              />
              <div className="mt3">
                <label className="db fw4 lh-copy f">Confirm Password</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="password"
                  name="confirmPassword"
                  onChange={changeHandler}
                  value={user.confirmPassword}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt3">
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            type="submit"
            onClick={handleSubmit}
          >
            Join
          </button>
        </div>
        <Footer />
      </form>
    </div>
  );
};

export default Register;
