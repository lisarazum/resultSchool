import './index.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { deleteTodo, editTodo } from '../../api';

import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';

const TodoInner = () => {
	const [todo, setTodo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const [isEditing, setIsEditing] = useState(false);
	const [newTodo, setNewTodo] = useState({ title: '', text: '' });
	const goBackClick = useNavigate();

	const params = useParams();
	const todoId = params.id;

	//Gettong the TODO
	useEffect(() => {
		setIsLoading(true);
		fetch(`http://localhost:3005/todos/${todoId}`)
			.then((rawResponce) => rawResponce.json())
			.then((response) => setTodo(response))
			.catch((error) =>
				console.error(`${error} - was find during getting the todo`),
			)
			.finally(() => setIsLoading(false));
	}, []);

	//Deleting the TODO
	const confirmDeleteTodo = () => {
		deleteTodo(todoId)
			.catch((error) => console.error(`${error} - in deleting the todos`))
			.finally(() => goBackClick(-1));
	};

	//Editing the TODO
	const editingTodo = () => {
		setNewTodo({ title: todo.title, text: todo.text });
		setIsEditing(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewTodo((prevTodoValue) => ({ ...prevTodoValue, [name]: value }));
	};

	const saveNewTodo = () => {
		setIsLoading(true);

		editTodo(todoId, newTodo)
			.then((response) => {
				setTodo({ ...response });
				setIsEditing(false);
			})
			.catch((error) =>
				console.error(`${error} - was find during editing the todo`),
			)
			.finally(() => setIsLoading(false));
	};

	return (
		<div className="container">
			<div className="todo">
				<div className="todo-top">
					<button className="todo-top__go-back" onClick={() => goBackClick(-1)}>
						<span className="icon">➪</span>
						<span className="text">Go back</span>
					</button>
					<h1 className="todo-top__title">
						To-Do{' '}
						<img
							src="https://cdn3d.iconscout.com/3d/premium/thumb/task-list-6378425-5283774.png"
							alt="todo"
						/>
					</h1>
				</div>
				<div className="todo-actions">
					<Button onClickFunc={() => editingTodo(true)}>✏️ - Edit</Button>
					<Button onClickFunc={() => setIsDeleting(true)}>🗑️ - Delete</Button>
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className="todo-inner">
						{isEditing ? (
							<>
								<textarea
									className="title"
									value={newTodo?.title}
									name="title"
									onChange={handleChange}
								/>
								<textarea
									className="text"
									value={newTodo?.text}
									name="text"
									onChange={handleChange}
								/>

								<div className="todo-inner__btns">
									<Button onClickFunc={() => saveNewTodo()}>
										💾 - Save
									</Button>
									<Button onClickFunc={() => setIsEditing(false)}>
										❌ - Cancel
									</Button>
								</div>
							</>
						) : (
							<>
								<h2 className="todo-inner__title">{todo?.title}</h2>
								<p className="todo-inner__text">{todo?.text}</p>
							</>
						)}
					</div>
				)}
				{isDeleting ? (
					<Modal
						closeModal={() => setIsDeleting(false)}
						confirmModal={() => confirmDeleteTodo()}
					/>
				) : null}
			</div>
		</div>
	);
};

export default TodoInner;
