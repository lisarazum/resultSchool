import './_TodoItem.scss';

const TodoItem = ({ title }) => {
	return (
		<li className="todo__item">
			<span className="todo__text">{title}</span>
		</li>
	);
};

export default TodoItem;
