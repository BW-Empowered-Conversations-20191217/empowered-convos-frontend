import React from 'react';
import './App.css';
import Contact from './components/contact';
import Login from './components/Login'
import Navigation from './components/header';
import { Route } from 'react-router-dom';

const App = () => {


  return (
    <div className="App">
      <Navigation />
      <Contact />
      <Route path="/Login" component={Login} />
      
    </div>


  ) }



export default App
