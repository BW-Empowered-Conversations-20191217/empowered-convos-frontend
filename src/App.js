import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Navigation from './components/header';
import MessageForm from './components/MessageForm';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {


  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/message' component={MessageForm} />
      <PrivateRoute path='/userpage' component={Contact} />
    </div>
  ) }



export default App
