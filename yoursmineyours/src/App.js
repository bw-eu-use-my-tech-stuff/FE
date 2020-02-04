import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import ForRentForm from './components/RentItemForm';
import OwnerRegister from './components/OwnerRegister';
import OwnerLogin from './components/OwnerLogin';
import OwnerDashboard from './components/OwnerDashboard';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={OwnerLogin}/>
      <Route path="/register" component={OwnerRegister}/>
      <Route path="/ownerDashboard" component={OwnerDashboard}/>
      <Route path="/rentItem" component={ForRentForm}/>
    </div>
  );
}

export default App;
