import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import Appa from './components/example'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'react-router-dom';

// import App from './components/A'
const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
       
            <App />
      
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

