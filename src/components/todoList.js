import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const todoList = ({ todos, toggleToDo }) => {
	return (
		<View style={styles.container}>
			{todos.map(todo => (
				<TouchableOpacity key={todo.id} onPress={() => toggleToDo(todo.id)}>
					<Text style={{ fontSize: 24, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
						{todo.text}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default todoList;

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});
