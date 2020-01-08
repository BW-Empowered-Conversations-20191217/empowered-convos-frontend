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
      <div>
      <Route path="/login" component={Login} />
      </div>
    </div>


  ) }



export default App
