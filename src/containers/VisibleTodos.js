import { connect } from 'react-redux';
import TodoList from '../components/todoList';

const mapStateToProps = state => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleToDo: id => dispatch({ type: 'TOGGLE_TODO', id }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
