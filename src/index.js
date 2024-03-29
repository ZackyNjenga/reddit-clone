import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';
import Routes from "./routes";
import { browserHistory } from 'react-router'

ReactDOM.render(
    <Routes
        history={browserHistory}/>,
     document.getElementById('root'));
registerServiceWorker();
