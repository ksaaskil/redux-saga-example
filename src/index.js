import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import allReducers from './js/reducers/allReducers'
import rootSaga from './js/sagas/sagas'
import Layout from "./js/components/Layout";

const app = document.getElementById('app')

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);
