import './App.css';
import { UserCard } from './components';
import { useState } from 'react';
import { CallbackProps } from './components/CallbackProps/CallbackProps';

const getUserIfo = () => ({
	name: 'Ivan',
	age: '25',
	email: 'ivan@mail.com',
	phone: '+7-999-999-99-99',
});

function App() {
	const user = getUserIfo();
	const [value, setValue] = useState(0);

	return (
		<>
			<h1>Users:</h1>

			<UserCard name={user.name} age={user.age} />
			<UserCard {...user} />

			<h2>CallbackProps</h2>
			<div>
				<label>Счетчик {value}</label>
				<CallbackProps value={value} onSetValue={setValue} />
			</div>
		</>
	);
}

export default App;
