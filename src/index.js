import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify'; 

Amplify.configure({
    Auth: {
        mandatorySignId: true,
        region: "us-east-2",
        userPoolId : "us-east-2_kInTeucGv",
        userPoolWebClientId :"565mmi4fcka5kt60halbd8679c"
    }
})

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
