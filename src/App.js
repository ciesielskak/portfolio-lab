import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { FourSteps } from "./components/FourSteps";
import { About } from "./components/About";

export const App = () => {
    return (

        <>
        <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <SignUp />
                    </Route>
                </Switch>
        </BrowserRouter>
            <FourSteps />
            <About />
        </>

    )
}