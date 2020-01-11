import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from "./navigation"
import Contactdata from "./contactdata"
//import Contact from './components/contact';
import Profile from './components/Profile';
//import Navigation from './components/header';
import MessageForm from './components/MessageForm';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  return (
  
    <div className="App">
      <Navigation />
     
      <Switch>
        <Route exact path="/profile" component={Contactdata} />
        {/* <Route path="/contactus" component={ContactUs} /> */}
        {/* <Route render={() => <h1 className="error">Sorry!!! Page Not Found </h1>} /> */}
      </Switch>

      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/message' component={MessageForm} />
      <PrivateRoute path='/userpage' component={Profile} />
    </div>
  ) 
}

export default App
