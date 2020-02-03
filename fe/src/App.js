import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register";
import Home from "./components/Home";
import Login from "./components/Login";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/works" component={Works} />
    </div>
  );
}

export default App;
