import { useState } from 'react';

export const useRequestAddTodos = (refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);
	const [newTodo, setNewTodo] = useState('');
	const [newTodoError, setNewTodoError] = useState(null);

	const requestAddTodo = (event) => {
		event.preventDefault();

		if (validate(newTodo)) {
			setIsCreating(true);

			fetch('http://localhost:3005/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify({
					id: Date.now(),
					title: newTodo,
					completed: false,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					refreshTodos();
				})
				.finally(() => {
					setIsCreating(false);
					setNewTodo('');
					event.target.reset();
				});
		}
	};

	const validate = (text) => {
		let error = null;

		if (text.length === 0) {
			error = 'Add a task';
			setNewTodoError(error);
			return false;
		}

		setNewTodoError(null);
		return true;
	};

	return { isCreating, requestAddTodo, setNewTodo, newTodoError };
};
