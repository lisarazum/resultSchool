import './_TodoAddAndSearch.scss';
import { useContext } from 'react';

import TodoSort from '../TodoSort';
import { AppContext } from '../../context.js';

const TodoAddAndSearch = () => {
	const { onAddButtonClick, errorValidation, debounceSearch, sortTodos } =
		useContext(AppContext);

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
							onChange={(e) => debounceSearch(e)}
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
