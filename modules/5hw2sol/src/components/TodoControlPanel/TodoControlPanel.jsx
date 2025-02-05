import './TodoControlPanel.scss';
import { useState } from 'react';
export const TodoControlPanel = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	const onSearchPhraseChange = ({ target }) => {
		setSearchPhrase(target.value);
	};

	const onSortingChange = ({ target }) => {
		setIsSortingEnabled(target.checked);
	};

	const onTodoAdd = () => {};

	return (
		<>
			<form className="todo-search">
				<label>
					<input
						type="text"
						className="input-reset todo-search__input"
						placeholder="Search"
						value={searchPhrase}
						onChange={onSearchPhraseChange}
					/>
				</label>

				<button
					className="btn-reset todo-search__add"
					type="submit"
					onClick={onTodoAdd}
				>
					Add
				</button>

				<input
					type="checkbox"
					className="todo-search__sort"
					checked={isSortingEnabled}
					onChange={onSortingChange}
				></input>
			</form>
		</>
	);
};
