const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
	onTodoClick: (id) => {
		dispatch(toggleTodo(id))
	}
});

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
