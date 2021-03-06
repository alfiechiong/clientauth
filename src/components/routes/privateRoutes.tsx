import React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import loggedIn from '../loggedIn'

const PrivateRoute:React.FC<RouteProps> = ({component:Component, ...rest})=> {
    return (
        <Route {...rest} render={props=>(
                loggedIn ? 
                <Component {...props} />
            : <Redirect to="/signin" />
            )
        } />
    );
}

export default PrivateRoute