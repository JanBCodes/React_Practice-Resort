// Root Component
// Creating a Component 

import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "../assets/css/App.css";
import "../assets/css/utilities.css";

import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Resorts from '../pages/Resorts';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/about">
            <AboutPage/>
        </Route>

        <Route path="/resorts">
            <Resorts/>
        </Route>

        <Route path="/login">
            <LoginPage/>
        </Route>

        <Route path="/register">
            <RegisterPage/>
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>

      </Switch>
    </Router>
    </>
  )
} 


/* 
const App = () => {
  return (
    <>
      <div class="grid grid-row-3" id="main-container">
        <Header/>
        <main>
          <Hero/>
          <ResortContainer/>
        </main>
        <Footer/>
      </div>
    </>
  )
} 
*/

export default App;
