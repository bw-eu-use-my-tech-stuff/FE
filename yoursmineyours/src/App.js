import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Login from './components/OwnerLogin';
import { Route } from 'react-router-dom';
import ForRentForm from './components/RentItemForm';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/rentItem" component={ForRentForm}/>
    </div>
  );
}

export default App;
