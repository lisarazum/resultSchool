import PropTypes from 'prop-types';
import './TodoItem.scss';

export const TodoItem = ({
	title,
	completed,
	isEditing,
	onTodoSave,
	onTitleChange,
	onRemove,
	onEdit,
}) => {
	// const onTodoEdit = () => {
	// 	if (!isEditing) {
	// 		setIsEditing(true);
	// 	} else {
	// 		setIsEditing(false);
	// 	}
	// };

	return (
		<li className={`todo__item ${completed ? 'checked' : ''}`}>
			{isEditing ? (
				<input
					type="text"
					className="todo__input"
					value={title}
					onChange={({ target }) => onTitleChange(target.value)}
				/>
			) : (
				<span className="todo__text">{title}</span>
			)}
			<span className="todo__check"></span>
			{isEditing ? (
				<span className="todo__save" onClick={onTodoSave}>
					ok
				</span>
			) : (
				<span className="todo__edit" onClick={onEdit}></span>
			)}

			<span className="todo__remove" onClick={onRemove}></span>
		</li>
	);
};
TodoItem.propTypes = {
	completed: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	onTodoSave: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	onTitleChange: PropTypes.func.isRequired,
};
