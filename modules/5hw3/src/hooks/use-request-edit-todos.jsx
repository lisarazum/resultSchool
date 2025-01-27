import { useState } from 'react';

import { ref, get, update } from 'firebase/database';
import { db } from '../firebase.jsx';

export const useRequestMarkTodos = (refreshTodos) => {
	const [isMarking, setIsMarking] = useState(false);
	const markTodo = (event, id) => {
		setIsMarking(true);

		const TaskRef = ref(db, `/todos/${id}`);
		get(TaskRef).then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();

				update(TaskRef, {
					completed: !data.completed,
				})
					.then(() => {
						console.log('Задача успешно обновлена');
					})
					.catch((error) => {
						console.error('Ошибка обновления задачи:', error);
					})
					.finally(() => {
						setIsMarking(false);
						refreshTodos();
					});
			} else {
				console.warn('Нет данных');
			}
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

		const TaskRef = ref(db, `/todos/${id}`);

		get(TaskRef).then((snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();

				update(TaskRef, {
					title: newTitle,
				})
					.then(() => {
						editTodo(event, id);
						refreshTodos();
					})
					.catch((error) => {
						console.error('Ошибка обновления задачи:', error);
					})
					.finally(() => {
						setIsEditing(false);
					});
			} else {
				console.warn('Нет данных');
			}
		});
	};

	return { editTodo, editingTodoId, handleSaveEdit, isEditing };
};
