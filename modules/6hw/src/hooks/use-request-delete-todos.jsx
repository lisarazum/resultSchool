import { useState } from 'react';

export const useRequestDeleteTodos = (refreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteTodo = (event, id) => {
		setIsDeleting(true);

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				refreshTodos();
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return { requestDeleteTodo, isDeleting };
};
