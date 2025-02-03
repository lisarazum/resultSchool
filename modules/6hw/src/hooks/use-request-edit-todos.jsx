import { useState } from 'react';

export const useRequestMarkTodos = (refreshTodos) => {
	const [isMarking, setIsMarking] = useState(false);
	const markTodo = (event, id) => {
		setIsMarking(true);

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'GET',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				const updatedTodo = { ...response, completed: !response.completed };
				return fetch(`http://localhost:3005/todos/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
					},
					body: JSON.stringify(updatedTodo),
				});
			})
			.then((updateRawResponse) => updateRawResponse.json())
			.then(() => {
				setIsMarking(false);
				refreshTodos();
			});
	};

	return { markTodo, isMarking };
};

export const useRequestEditTodos = (refreshTodos) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editingTodoId, setEditingTodoId] = useState(null);
	const editTodo = (event, id) => {
		setEditingTodoId((prevId) => (prevId === id ? null : id));
	};

	const handleSaveEdit = (event, id) => {
		event.preventDefault();
		setIsEditing(true);
		const newTitle = event.target.querySelector('.todo__edit-input').value;

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'GET',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				const updatedTodo = { ...response, title: newTitle };

				return fetch(`http://localhost:3005/todos/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
					},
					body: JSON.stringify(updatedTodo),
				});
			})
			.then((updatedRawResponse) => {
				updatedRawResponse.json();
			})
			.then(() => {
				editTodo(event, id);
				refreshTodos();
			})
			.finally(() => setIsEditing(false));
	};

	return { editTodo, editingTodoId, handleSaveEdit, isEditing };
};
