import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Landing from '../Landing'
import PrivateRoute from './PrivateRoute'
const AppRouter = ():JSX.Element =>{
    return <Router >
            <Switch>
                <Route component={SignIn} path="/" exact />
                <Route component={SignUp} path="/signup" exact />
                <PrivateRoute component={Landing} path="/landing" exact />
            </Switch>
        </Router>
}

export default AppRouter