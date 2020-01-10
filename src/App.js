import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Navigation from './components/header';
import MessageForm from './components/MessageForm';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {


  return (
    <div className="App">
      <Navigation />
      <PrivateRoute path='/message' component={MessageForm} />
      <PrivateRoute path='/userpage' component={Contact} />
    </div>
  ) }



export default App
