import './_TodoItem.scss';

import { Link } from 'react-router-dom';

const TodoItem = ({ title, id }) => {
	return (
		<Link className="todo__item" to={`/todos/${id}`}>
			<span className="todo__text">{title}</span>
		</Link>
	);
};

export default TodoItem;
