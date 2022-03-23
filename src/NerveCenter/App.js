import React from "react";
import { Switch, Route } from 'react-router-dom';

import NavBar from '../Components/NavBar';
import Reader1 from '../Components/Reader1';

import Home from './Home';

import '../App.css';

const App = () => {
  
  return (
    <div id="app" >

    <NavBar />

    <Switch>

      <Route exact path="/Reader">
        <Reader1 />
      </Route>
    
    </Switch>
      
    </div>
  )
}

export default App;
