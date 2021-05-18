import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import 'animate.css'
import App from './App';
import './i18n'

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
