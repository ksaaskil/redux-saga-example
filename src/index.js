import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import allReducers from './js/reducers/allReducers'
import rootSaga from './js/sagas/sagas'
import Layout from "./js/components/Layout";
import logger from 'redux-logger'

const app = document.getElementById('app')

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);
