import PropTypes from 'prop-types';
import './TodoItem.scss';
export const TodoItem = ({ item }) => {
	return (
		<li className={`todo__item ${item.completed ? 'checked' : ''}`}>
			{item.title}
			<span className="todo__check"></span>
			<span className="todo__done"></span>
		</li>
	);
};

TodoItem.propTypes = {
	item: PropTypes.shape({
		completed: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired,
	}),
};
