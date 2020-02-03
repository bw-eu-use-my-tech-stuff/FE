import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Register from './components/register';

function App() {
  return (
    <div>
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
