import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import App from './App';
import { Provider } from "react-redux";
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();