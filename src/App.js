import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import {HomeHeader} from "./components/HomeHeader";


export const App = () => {
    return (

        <>
        <BrowserRouter>
            <HomeHeader />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/register'>
                        <SignUp />
                    </Route>
            </Switch>
        </BrowserRouter>
        </>

    )
}