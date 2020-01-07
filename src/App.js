import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Navigation from './components/header';
import MessageForm from './components/MessageForm';
const App = () => {


  return (
    <div className="App">
      <Navigation />
      <Route path='/message' component={MessageForm} />
      <Route path='/userpage' component={Contact} />
    </div>
  ) }



export default App
