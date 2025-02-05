import './TodoList.scss';
import { useEffect, useState } from 'react';
import { Loader, TodoItem, TodoControlPanel } from '../index.jsx';
import { deleteTodo, readTodos, updateTodo } from '../../api';
import { setTodoInTodos, removeTodo, findTodo } from '../../utils';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		readTodos()
			.then((json) => setTodos(json))
			.catch((error) => console.error(`${error} - while getting to the server`))
			.finally(() => setIsLoading(false));
	}, []);

	const onTodoNewTitleSave = (id) => {
		const { title } = findTodo(todos, id) || {};

		updateTodo({ id, title }).then(() => {
			setTodos(setTodoInTodos(todos, { id, isEditing: false }));
		});
	};

	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};
	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => removeTodo(todos, id));
	};

	return (
		<div className="todo">
			<h1 className="todo__title">
				To-Do list{' '}
				<img
					src="https://cdn3d.iconscout.com/3d/premium/thumb/task-list-6378425-5283774.png"
					alt="todo"
				/>
			</h1>
			<TodoControlPanel />
			<div className="todo__block">
				<ul className="list-reset todo__list">
					{isLoading ? (
						<Loader />
					) : (
						todos.map(({ id, title, completed, isEditing = false }) => (
							<TodoItem
								key={id}
								id={id}
								title={title}
								completed={completed}
								isEditing={isEditing}
								onTodoSave={() => onTodoNewTitleSave(id)}
								onTitleChange={(newTitle) =>
									onTodoTitleChange(id, newTitle)
								}
								onRemove={() => onTodoRemove(id)}
								onEdit={() => onTodoEdit(id)}
							/>
						))
					)}
				</ul>
			</div>
		</div>
	);
};
