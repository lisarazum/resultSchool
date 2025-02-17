import './index.scss';

import { useEffect, useState } from 'react';
import { AppContext } from '../../context.js';

import { createTodo, findTodo, readTodos, sortTodo } from '../../api/index.js';
import { debounce } from '../../utils/index.js';

import TodoAddAndSearch from '../TodoAddAndSearch/index.jsx';
import TodoList from '../TodoList/index.jsx';

const TodoApp = () => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [isSearching, setIsSearching] = useState(false);

	const [sortOrder, setSortOrder] = useState('asc');

	const [errorValidation, setErrorValidation] = useState(false);

	// GETting data from json-server
	useEffect(() => {
		setIsLoading(true);

		readTodos()
			.then((response) => setTodoList(response))
			.catch((error) => console.error(`${error} - in getting the todos`))
			.finally(() => setIsLoading(false));
	}, [setTodoList]);

	//ADDing new data to json-server
	const onAddButtonClick = (e) => {
		e.preventDefault();

		const newTodoTextValue = e.target.querySelector('input').value;

		if (newTodoTextValue.length === 0) {
			setErrorValidation(true);
			return;
		}

		const newTodo = {
			title: newTodoTextValue,
			completed: false,
		};

		createTodo(newTodo)
			.then((response) => {
				setTodoList((prevTodos) => [...prevTodos, response]);

				e.target.reset();
			})
			.then(() => {
				return readTodos();
			})
			.catch((error) => console.error(`${error} - in adding the todos`))
			.finally(() => setErrorValidation(false));
	};

	//SEARCH todos
	const searchTodo = (event) => {
		setIsSearching(true);
		if (event.target.value) {
			findTodo(event.target.value)
				.then((response) => {
					setTodoList(response);
				})
				.catch((error) => console.error(`${error} - in searching the todos`))
				.finally(() => setIsSearching(false));
		}
	};

	const debounceSearch = debounce(searchTodo, 300);

	//SORT todos
	const sortTodos = () => {
		const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';

		setSortOrder(newOrder);

		sortTodo(newOrder)
			.then((response) => {
				setTodoList(response);
			})
			.catch((error) => console.error(`${error} - in sorting the todos`))
			.finally();
	};

	return (
		<AppContext.Provider
			value={{
				todoList,
				setTodoList,
				isLoading,
				errorValidation,
				onAddButtonClick,
				debounceSearch,
				sortTodos,
			}}
		>
			<div className="container">
				<div className="todo">
					<div className="todo-top">
						<h1 className="todo-top__title">
							To-Do list{' '}
							<img
								src="https://cdn3d.iconscout.com/3d/premium/thumb/task-list-6378425-5283774.png"
								alt="todo"
							/>
						</h1>
					</div>
					<TodoAddAndSearch />
					<div className="todo__block">
						<TodoList />
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
};

export default TodoApp;
