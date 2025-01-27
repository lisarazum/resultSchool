import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase.jsx';

export const useRequestDeleteTodos = (refreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = (event, id) => {
		setIsDeleting(true);

		const DBTodos = ref(db, `/todos/${id}`);
		remove(DBTodos)
			.then(() => {
				refreshTodos();
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return { requestDeleteTodo, isDeleting };
};
