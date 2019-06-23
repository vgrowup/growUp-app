import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Test from './components/Test';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
	<Router>
	  <div>
		<Route path="/" component={App} />
		<Route path="/test" component={Test} />
	  </div>
	</Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
