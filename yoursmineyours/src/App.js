import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
