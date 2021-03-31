import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './sass/settings/_main.scss';
import {StateProvider} from "./context/StateProvider";
import {initialState, reducer} from "./context/reducer";


ReactDOM.render(
    <StateProvider reducer={reducer} initialState={initialState}>
    <App />
    </StateProvider>,
  document.getElementById('root')
);


