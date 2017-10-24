import React 						from "react";
import ReactDOM 					from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import * as videoActions 			from './actions/videoActions';
import { Provider } 				from 'react-redux';
import App 							from './components/App';
import Home 						from './components/main/VideoPage';
import VideoDetailsPage 			from './components/main/VideoDetailsPage';
import configureStore 				from './store/configureStore';

const app = document.getElementById('app'); // client.min.js imported in index.html

const store = configureStore();

store.dispatch(videoActions.fetchVideos());

ReactDOM.render(
	<Provider store={store}>
		<Router  history={hashHistory}> 
			<Route path="/" component={App}> //homepage - matches with IndexRoute
				<IndexRoute component={Home}></IndexRoute>
				<Route path="/:id" component={VideoDetailsPage}></Route>
			</Route>
		</Router>
	</Provider>, app
);
