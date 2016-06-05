// main.js
import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router-component';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import TopBar from './top-bar/top-bar';
import SideBar from './side-bar/side-bar';
import MainPanel from './main-panel/main-panel';

import mainReducers from 'reducers';
import {reducer as formReducer} from 'redux-form';

const initState = {
    main: {showSideBar: true, userList: [], loanNum: 0},
    form: {}
};
const reducers = {
    form: formReducer,
    main: mainReducers
}
const reducer = combineReducers(reducers);
let store = createStore(reducer, initState);

render(
    <Provider store={store}>
        <div>
            <TopBar />
            <SideBar />
            <MainPanel />
        </div>
    </Provider>,
    document.getElementById('container')
);

Router.environment.defaultEnvironment.navigate(window.location.pathname);