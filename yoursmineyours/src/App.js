import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import ForRentForm from './components/RentItemForm';
import OwnerRegister from './components/OwnerRegister';
import OwnerLogin from './components/OwnerLogin';
import AddItem from './components/DashboardAddItem';
import DashboardAfterOwnerLogin from './components/DashboardAfterOwnerLogin';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={OwnerLogin}/>
      <Route path="/register" component={OwnerRegister}/>
      <Route path="/addItem" component={AddItem}/>
      <Route path="/rentItem" component={ForRentForm}/>
      <Route path="/ownerDashboard" component={DashboardAfterOwnerLogin}/>
    </div>
  );
}

export default App;
