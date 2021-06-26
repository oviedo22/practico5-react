import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'

//creamos el componente y lo importamos al index y ahí lo utilizamos renderizándolo con render

ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter> 
                <App/>
            </BrowserRouter>
        </React.StrictMode>,
    document.getElementById('root')
    );

