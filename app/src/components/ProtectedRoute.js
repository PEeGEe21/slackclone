// import React from 'react'
// import { Redirect } from 'react-router-dom'

// class ProtectedRoute extends React.Component {

//     render() {
//         const Component = this.props.component;
//         const isAuthenticated = localStorage.getItem('token');
      
//         return isAuthenticated ? (
//             <Component />
//         ) : (
//             <Redirect to={{ pathname: '/login' }} />
//         );
//     }
// }

// export default ProtectedRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("user") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/find",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;