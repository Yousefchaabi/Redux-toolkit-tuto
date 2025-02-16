import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux';
import { store } from './Redux-Toolkit/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider  store={store}>
        <App />
    </Provider>
);

