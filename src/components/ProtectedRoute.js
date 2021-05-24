import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = localStorage.getItem("isAuthorized") === "true";
  return (
    <Route {...rest} render={
      props => {
        if (isAuthorized) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: "/unauthorized",
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;