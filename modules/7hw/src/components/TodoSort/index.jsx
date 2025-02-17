import './index.scss';

const TodoSort = ({ sortTodos }) => {
	return (
		<button className="btn-reset todo-action__btn" onClick={sortTodos}>
			↕
		</button>
	);
};

export default TodoSort;
