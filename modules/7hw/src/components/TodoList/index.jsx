import './_TodoList.scss';

import { AppContext } from '../../context.js';

import Loader from '../Loader';
import TodoItem from '../TodoItem';
import { useContext } from 'react';

const TodoList = () => {
	const { todoList, isLoading } = useContext(AppContext);
	const renderTodoList = () => {
		if (isLoading) {
			return <Loader />;
		}

		if (todoList.length === 0) {
			return <p>No tasks today!</p>;
		}

		return (
			<>
				<ul className="list-reset todo__list">
					{todoList.map((item) => (
						<TodoItem key={item.id} title={item.title} id={item.id} />
					))}
				</ul>
			</>
		);
	};

	return renderTodoList();
};

export default TodoList;
