import './TodoList.scss';
import { useState } from 'react';
import {
	useRequestGetTodos,
	useRequestAddTodos,
	useRequestDeleteTodos,
	useRequestMarkTodos,
	useRequestEditTodos,
} from '../../hooks';
import { Loader } from '../Loader/Loader.jsx';

export const TodoList = () => {
	//Дополнительно. Реализовать продвинутый поиск с помощью debounce().
	const [searchOpen, setSearchOpen] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const [searchValue, setSearchValue] = useState('');

	//узнать что это такое и зачем
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { todos, isLoading } = useRequestGetTodos(refreshTodosFlag);
	const { isCreating, requestAddTodo, setNewTodo, newTodoError } =
		useRequestAddTodos(refreshTodos);
	const { requestDeleteTodo, isDeleting } = useRequestDeleteTodos(refreshTodos);
	const { markTodo, isMarking } = useRequestMarkTodos(refreshTodos);
	const { editTodo, editingTodoId, handleSaveEdit, isEditing } =
		useRequestEditTodos(refreshTodos);

	const [isAscending, setIsAscending] = useState(true);
	const handleSort = () => {
		todos.sort((a, b) => {
			return isAscending
				? a.title.localeCompare(b.title)
				: b.title.localeCompare(a.title);
		});
		setIsAscending(!isAscending);
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
			<form className="todo__row" onSubmit={requestAddTodo}>
				<label>
					{newTodoError && <div className="error">{newTodoError}</div>}
					<input
						type="text"
						className="input-reset todo__input"
						placeholder="Add your task"
						onChange={(e) => setNewTodo(e.target.value)}
					/>
				</label>

				<button
					className="btn-reset todo__add"
					type="submit"
					disabled={isCreating}
				>
					Add
				</button>
			</form>
			<div className="todo-top">
				{searchOpen ? (
					<>
						<form
							className="todo__edit-form"
							onSubmit={(e) => e.preventDefault()}
						>
							<input
								type="text"
								className="todo__edit-input"
								placeholder="Search"
								onChange={({ target }) => setSearchValue(target.value)}
							/>
						</form>
						<button
							className="todo-top__btn close"
							onClick={() => {
								setSearchOpen(false);
								refreshTodos();
							}}
						>
							Reset
						</button>
					</>
				) : (
					<button
						className="todo-top__btn find"
						onClick={() => setSearchOpen(true)}
					></button>
				)}

				<button
					className="todo-top__btn sort"
					onClick={() => handleSort()}
				></button>
			</div>
			<div className="todo__block">
				<ul className="list-reset todo__list">
					{isLoading || isCreating || isDeleting || isMarking || isEditing ? (
						<Loader />
					) : todos.length > 0 ? (
						todos
							.filter((item) => {
								return item.title
									.toLowerCase()
									.includes(searchValue.toLowerCase());
							})
							.map((item) => (
								<li
									className={`todo__item ${item.completed ? 'checked' : ''}`}
									id={item.id}
									key={item.id}
								>
									{editingTodoId === item.id ? (
										<form
											className="todo__edit-form"
											onSubmit={() => {
												handleSaveEdit(event, item.id);
											}}
										>
											<input
												type="text"
												className="todo__edit-input"
												defaultValue={item.title}
											/>
											<button type="submit" className="btn-save">
												OK
											</button>
										</form>
									) : (
										<span className="todo__text">{item.title}</span>
									)}
									<span
										className="todo__check"
										onClick={() => {
											markTodo(event, item.id);
										}}
									></span>
									<span
										className="todo__edit"
										onClick={() => editTodo(event, item.id)}
									></span>
									<span
										className="todo__done"
										onClick={() => {
											requestDeleteTodo(event, item.id);
										}}
									></span>
								</li>
							))
					) : (
						<p>Сегодня дел нет</p>
					)}
				</ul>
			</div>
		</div>
	);
};
