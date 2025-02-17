import './App.css';
import Header from './components/Header/index.jsx';
import UserBlock from './components/UserBlock/index.jsx';
import { AppContext } from './context.js';
import { useEffect, useReducer } from 'react';

const getUsersFromServer = () => ({
	id: '111',
	name: 'Иван',
	age: 23,
	email: 'asd@yandex.ru',
	phone: '8-999-999-99-99',
});

const getAnotherUsersFromServer = () => ({
	id: '111',
	name: 'Ivan',
	age: 23,
	email: 'asd@yandex.ru',
	phone: '8-999-999-99-99',
});

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

function App() {
	const [userData, dispatch] = useReducer(reducer, {});

	useEffect(() => {
		const usersFromServer = getUsersFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: usersFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUsersFromServer = getAnotherUsersFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: anotherUsersFromServer });
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div>
				<h1>7. Context API</h1>
				<h2>Context API</h2>
				<p>
					Для реализации нужно импортировать 2 компонента createContext и
					useContext
				</p>
				<p>
					Чтобы использовать Контекст, первым делом нужно его создать. Считается
					хорошим тоном делать это в отдельном файле.
				</p>
				<p>
					createContext() — это функция, которая создает Контекст. Она принимает
					значение Контекста по умолчанию и возвращает объект, содержащий
					провайдер (Provider) и потребителя (Consumer) Контекста.
					<br />
					SomeContext — провайдер, который используется для установки и
					предоставления значения Контекста всем компонентам-потомками. Значение
					Контекста устанавливается в проп value.
					<br />
					SomeContext.Provider — синтаксис потеряет свою поддержку в будущих
					обновлениях React
					<br />
					SomeContext.Consumer — используется для чтения значения контекста
					(использовался до появления useContext()). useContext() — хук React,
					позволяющий читать и подписываться на Контекст из компонента.
				</p>
				<h2>Динамический контекст</h2>
				<p></p>

				<Header />
				<hr />
				<UserBlock />

				<button onClick={onUserChange}>Change User</button>
			</div>
		</AppContext.Provider>
	);
}

export default App;
