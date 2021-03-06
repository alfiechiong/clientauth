import React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import loggedIn from '../loggedIn'

const PublicRoute:React.FC<RouteProps> = ({component:Component, restricted:boolean, ...rest}) =>{
    return (
        <Route {...rest} render={props =>(
            loggedIn  && restricted ? <Redirect to="/landing" /> : <Component {...props} />
        )}/>
    )
}

export default PublicRoute