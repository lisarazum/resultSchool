import './TodoList.scss';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader.jsx';
import { TodoItem } from '../TodoItem/TodoItem.jsx';

export const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => setTasks(json))
			.catch((error) => console.error(error))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className="todo">
			<h1 className="todo__title">
				To-Do list{' '}
				<img
					src="https://cdn3d.iconscout.com/3d/premium/thumb/task-list-6378425-5283774.png"
					alt="todo"
				/>
			</h1>
			<div className="todo__block">
				<ul className="list-reset todo__list">
					{isLoading ? (
						<Loader />
					) : (
						tasks.map((task) => <TodoItem key={task['id']} item={task} />)
					)}
				</ul>
			</div>
		</div>
	);
};
