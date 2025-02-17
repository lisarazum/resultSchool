import './_TodoItem.scss';
import { useContext } from 'react';

import { AppContext } from '../../context.js';

import Button from '../Button';

import { deleteTodo, readTodos } from '../../api';

const TodoItem = ({ title, id }) => {
	const { setTodoList } = useContext(AppContext);

	const confirmDeleteTodo = async () => {
		const deletedId = await deleteTodo(id);

		if (deletedId) {
			setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== deletedId));
		}
	};

	return (
		<li className="todo__item">
			<span className="todo__text">{title}</span>
			<Button onClickFunc={confirmDeleteTodo}>🗑️</Button>
		</li>
	);
};

export default TodoItem;
