import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage.component';
import Shop from '../pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
