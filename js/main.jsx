import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx'

require("../scss/main.scss");

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});