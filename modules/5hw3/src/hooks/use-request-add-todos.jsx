import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase.jsx';

export const useRequestAddTodos = () => {
	const [isCreating, setIsCreating] = useState(false);
	const [newTodo, setNewTodo] = useState('');
	const [newTodoError, setNewTodoError] = useState(null);

	const requestAddTodo = (event) => {
		event.preventDefault();

		if (validate(newTodo)) {
			setIsCreating(true);

			const DBTodos = ref(db, 'todos');
			push(DBTodos, {
				title: newTodo,
				completed: false,
			}).then(() => {
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
