import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import {HomeHeader} from "./components/HomeHeader";
import { StateProvider } from "./context/StateProvider";
import { initialState, reducer } from "./context/reducer";


export const App = () => {
    return (

        <>
        <BrowserRouter>
            <StateProvider reducer={reducer} initialState={initialState}>
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
            </StateProvider>
        </BrowserRouter>
        </>

    )
}