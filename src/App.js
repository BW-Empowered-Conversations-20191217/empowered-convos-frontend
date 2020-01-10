import React from 'react';
import './App.css';
import Navigation from "./navigation"
import Contactdata from "./contactdata"
import ContactUs from './ContactUs'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {

  return (
    <Router>
    <div className="App">
      <Navigation />
     
      <Switch>
        <Route exact path="/profile" component={Contactdata} />
        <Route path="/contactus" component={ContactUs} />
        <Route render={() => <h1 className="error">Sorry!!! Page Not Found </h1>} />
      </Switch>
      

    </div>
    </Router>
  ) }

export default App
