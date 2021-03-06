import React from "react"
import { BrowserRouter } from "react-router-dom"
import PrivateRoute from "./privateRoutes"
import PublicRoute from "./publicRoutes"

const Router = ():JSX.Element =>{
    return <BrowserRouter>
    <switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
        <PrivateRoute component={Landing} path="/landing" exact/>
    
    </switch>
    </BrowserRouter>
}

export default Router