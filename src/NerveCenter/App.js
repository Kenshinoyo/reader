import React from "react";
import { Route, Switch } from 'react-router-dom';

import NavBar from '../Components/NavBar';
import Reader1 from '../Components/Reader1';
import Footer from "../Components/Footer";

import Home from "./Home";

import '../App.css';

const App = () => {
  
  return (
    <div id="app" >

    <NavBar />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/reader">
        <Reader1 />
      </Route>
    
    </Switch>

    <Footer />
      
    </div>
  )
}

export default App;
