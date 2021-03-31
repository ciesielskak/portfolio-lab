import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { HomeHeader } from "./components/HomeHeader";
import { GiveAway } from "./components/GiveAway";
import { useStateValue } from "./context/StateProvider";
import { LogoutSuccess } from "./components/LogoutSuccess";

import {auth} from "./firebase/firebase";


export const App = () => {
    const [state, dispatch] = useStateValue();
    const { user } = state;

    const authListener = () => {
        auth.onAuthStateChanged(user => {
            if(user) {
                dispatch ({
                    type: 'setUser',
                    user: user
                })
            }
            else {
                dispatch ({
                    type: 'setUser',
                    user: null
                })
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);

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
                <Route exact path='/logout-successful'>
                    <LogoutSuccess />
                </Route>
                    <Route exact path='/register'>
                        <SignUp />
                    </Route>
                <Route exact path='/giveaway'>
                    <GiveAway />
                </Route>
            </Switch>
        </BrowserRouter>
        </>

    )
}