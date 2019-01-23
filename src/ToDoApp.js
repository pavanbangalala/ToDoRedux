import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { AddToDo, VisibleTodos } from './containers';

export default class ToDoApp extends Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			visbilityFilter: 'SHOW_ALL',
		};
	}
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<AddToDo />
				<View>
					<VisibleTodos />
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});
