import React from 'react';
import { Switch ,Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';

const Hatspage = (props) => {
  return (
    <div>
      <h1>Hats page</h1>
      <Link to='/'>HomePage</Link>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={Hatspage}/>
      </Switch>
    </div>
  );
}

export default App;
