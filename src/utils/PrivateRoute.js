import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './axiosWithAuth';
 
function PrivateRoute(props) {
  const {
    component : Component,
    ...rest
  } = props

  return(
    <Route {...rest} render={(renderProps) => {
      if(
        //localStorage.getItem("token")
        getToken()
        ) {
        return <Component {...renderProps} />
      } else {
        return <Redirect to="/" />
      }
      }} 
    />
  )
};

export default PrivateRoute;