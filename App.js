/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ToDoApp from './src/ToDoApp';
import store from './src/store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ToDoApp />
			</Provider>
		);
	}
}
