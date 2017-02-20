import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';

import LandingPageContainer from './containers/landing-page'

import { configureStore } from './store/configureStore';

import './styles/main.scss';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		{routes()}
	</Provider>,document.getElementById('root')
);
