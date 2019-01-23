import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class AddToDo extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
		};
	}

	addToDo = () => {
		this.props.dispatch({ type: 'ADD_TODO', text: this.state.text });
		this.setState({ text: '' });
	};
	render() {
		return (
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: '#eaeaea',
					marginHorizontal: 8,
					paddingHorizontal: 16,
					justifyContent: 'center',
					borderWidth: 1,
					borderColor: '#f2f2e1',
				}}
			>
				<TextInput
					style={{ height: 50, flex: 1 }}
					placeholder="Add an Item"
					value={this.state.text}
					onChangeText={value => this.setState({ text: value })}
				/>
				<TouchableOpacity onPress={this.addToDo}>
					<View
						style={{
							height: 50,
							backgroundColor: '#eaeaea',
							justifyContent: 'center',
							alignItems: 'center',
							paddingVertical: 8,
						}}
					>
						<Icon type="ionicon" name="md-add" color="red" size={30} />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

export default connect()(AddToDo);
