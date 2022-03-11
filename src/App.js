import React from 'react';
import { Switch ,Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
