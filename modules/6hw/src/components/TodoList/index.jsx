import './_TodoList.scss';

import Loader from '../Loader';
import TodoItem from '../TodoItem';

const TodoList = ({ data, loader = false }) => {
	const renderTodoList = () => {
		if (loader) {
			return <Loader />;
		}

		if (data.length === 0) {
			return <p>No tasks today!</p>;
		}

		return (
			<ul className="list-reset todo__list">
				{data.map((item) => (
					<TodoItem key={item.id} title={item.title} />
				))}
			</ul>
		);
	};

	return renderTodoList();
};

export default TodoList;
