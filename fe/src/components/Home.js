import React from "react";
import rent from "../images/rent.png";
import Keyboard from "../images/keyboard.jpg";
import "../styles/tachyon.css";
import { Link } from "react-router-dom";

function Home() {
  // const goToLogin = (props) => {
  //     console.log(props);
  //     props.push('/login');

  return (
    <header className="sans-serif">
      <div
        className="cover bg-left bg-center-l"
        style={{ backgroundImage: `url(${Keyboard})` }}
      >
        <div className="bg-black-80 pb5 pb6-m pb7-l">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3">
              <div>
                <img src={rent} alt="not" className="left" />
              </div>
            </div>
            <div className="dtc v-mid tr pa3">
              <a
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
              >
                How it Works
              </a>
              <a
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
              >
                Pricing
              </a>
              <a
                className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                href="/"
              >
                About
              </a>
              <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">
                Login
              </Link>
              <Link
                to="/register"
                className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
              >
                Register
              </Link>
            </div>
          </nav>
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">RENT TECH</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">
              Borrow Peoples Tech Equiptment, Share with Others
            </h2>
            <Link
              to="/login"
              className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
            >
              Start Today
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
