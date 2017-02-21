import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';

import LandingPageContainer from './containers/landing-page'

import { configureStore } from './store/configureStore';

import './styles/main.scss';

const store = configureStore();

let config = {};

export default function(appLevelConfig){
	config = Object.assign(config, appLevelConfig);
}

ReactDOM.render(
	<Provider store={store}>
		{routes(config)}
	</Provider>,document.getElementById('root')
);
