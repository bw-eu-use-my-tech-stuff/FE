import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function dashboard() {
  axios
    .get("https://use-my-tech-stuff-eu.herokuapp.com/api/equipments")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  return (
    <div>
      <nav className="pa3 pa4-ns">
        <Link
          to="/"
          className="link dim black b f6 f5-ns dib mr3"
          href="#"
          title="Home"
        >
          Rent Tech
        </Link>
        <Link
          to="/"
          className="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="Home"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="About"
        >
          About
        </Link>
        <Link
          to="pricing"
          className="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="Store"
        >
          Pricing
        </Link>
        <Link
          to="/works"
          className="link dim gray    f6 f5-ns dib"
          href="#"
          title="Contact"
        >
          How it Works
        </Link>
      </nav>
    </div>
  );
}
export default dashboard;
