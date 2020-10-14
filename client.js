/*const ReactGA = require('react-ga');
ReactGA.initialize('UA-96092916-1');*/
const React = require('react');
//const ReactDOM = require('react-dom');

import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

//const Routes = require('./routes/routes.jsx');

import Routes from './routes/routes.jsx';


/*if (typeof window === 'object'){

    function fireTracking() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname );
    }
}*/


ReactDOM.hydrate(
    <BrowserRouter><Routes/></BrowserRouter>, document
);


