import { useContext } from 'react';
import { AppContext } from '../../../../context.js';
const UserPersonalInfo = () => {
	const { userData, dispatch } = useContext(AppContext);
	const { name, age } = userData;

	const onUserUpdate = () => {
		const newUserData = { name, age: 30 };
		dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	const onUserUpdateAge = () => {
		dispatch({ type: 'SET_USER_AGE', payload: 3 });
	};

	return (
		<div>
			<h3>Персональные данные</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>

			<button onClick={onUserUpdate}>Update User</button>
			<button onClick={onUserUpdateAge}>Update UserAge</button>
		</div>
	);
};

export default UserPersonalInfo;
