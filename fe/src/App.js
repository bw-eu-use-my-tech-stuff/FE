import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Register from  './components/Register';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      </div>
  );
}

export default App;
