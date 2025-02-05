import './TodoList.scss';
import { useState } from 'react';
import { useRequestGetTodos } from '../../hooks/index.jsx';

import { Loader } from '../Loader/Loader.jsx';

export const TodoList = () => {
	const { todos, isLoading } = useRequestGetTodos();

	return (
		<div className="todo">
			<h1 className="todo__title">
				To-Do list{' '}
				<img
					src="https://cdn3d.iconscout.com/3d/premium/thumb/task-list-6378425-5283774.png"
					alt="todo"
				/>
			</h1>
			<form className="todo__row">
				<label>
					<input
						type="text"
						className="input-reset todo__input"
						placeholder="Add your task"
					/>
				</label>

				<button className="btn-reset todo__add" type="submit">
					Add
				</button>
			</form>
			<div className="todo-top">
				{/*{searchOpen ? (*/}
				{/*	<>*/}
				{/*		<form*/}
				{/*			className="todo__edit-form"*/}
				{/*			onSubmit={(e) => e.preventDefault()}*/}
				{/*		>*/}
				{/*			<input*/}
				{/*				type="text"*/}
				{/*				className="todo__edit-input"*/}
				{/*				placeholder="Search"*/}
				{/*				onChange={({ target }) => setSearchValue(target.value)}*/}
				{/*			/>*/}
				{/*		</form>*/}
				{/*		<button*/}
				{/*			className="todo-top__btn close"*/}
				{/*			onClick={() => {*/}
				{/*				setSearchOpen(false);*/}
				{/*				refreshTodos();*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			Reset*/}
				{/*		</button>*/}
				{/*	</>*/}
				{/*) : (*/}
				{/*	<button*/}
				{/*		className="todo-top__btn find"*/}
				{/*		onClick={() => setSearchOpen(true)}*/}
				{/*	></button>*/}
				{/*)}*/}

				{/*<button*/}
				{/*	className="todo-top__btn sort"*/}
				{/*	onClick={() => handleSort()}*/}
				{/*></button>*/}
			</div>
			<div className="todo__block">
				<ul className="list-reset todo__list">
					{isLoading ? (
						<Loader />
					) : (
						todos.map((item) => (
							<li className="todo__item" id={item.id} key={item.id}>
								<span className="todo__text">{item.title}</span>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};
