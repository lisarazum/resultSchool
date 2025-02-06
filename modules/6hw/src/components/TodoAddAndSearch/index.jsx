import './_TodoAddAndSearch.scss';

import TodoSort from '../TodoSort';

const TodoAddAndSearch = ({
	onAddButtonClick,
	errorValidation,
	searchTodo,
	sortTodos,
}) => {
	return (
		<>
			<div className="todo-action">
				{errorValidation && (
					<span>Your task must have at least 1 letter in it. Come on!</span>
				)}
				<form className="todo-action-form" onSubmit={onAddButtonClick}>
					<label>
						<input
							type="text"
							className="input-reset todo-action-form__input"
							placeholder="Add your task or find one"
							onChange={(e) => searchTodo(e)}
						/>
					</label>

					<button className="btn-reset todo-action-form__add" type="submit">
						Add
					</button>
				</form>

				<TodoSort sortTodos={sortTodos} />
			</div>
		</>
	);
};

export default TodoAddAndSearch;
