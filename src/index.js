import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Login from './components/Login'
import * as serviceWorker from './serviceWorker';
import { BrowserRowter, Match, Miss } from 'react-router';
import BrowserRouter from 'react-router/BrowserRouter';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App}/>
				<Match pattern="/test/:testId" component={Test}/>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
