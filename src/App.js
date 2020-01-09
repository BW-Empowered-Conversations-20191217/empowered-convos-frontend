import React from 'react';
import './App.css';
import Contact from './components/contact';
import Login from './components/Login'
import Register from './components/Register'
import Navigation from './components/header';
import { Route } from 'react-router-dom';

const App = () => {


  return (
    <div className="App">
      <Navigation />
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path = "/contact" component={Contact} />
      
        
      
    </div>


  ) }



export default App
