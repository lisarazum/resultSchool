import { useState } from 'react';

const initialState = {
	email: '',
	login: '',
	password: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => {
			setState(initialState);
		},
	};
};

const sendData = (formData) => {
	console.log(formData);
};

export const ManyInputs = () => {
	const { getState, updateState, resetState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, login, password } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<form onSubmit={onSubmit}>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={email}
				onChange={onChange}
			/>
			<input
				type="text"
				name="login"
				placeholder="Login"
				value={login}
				onChange={onChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={password}
				onChange={onChange}
			/>

			<button type="button" onClick={resetState}>
				Очистить форму
			</button>
			<button type="submit">Отправить</button>
		</form>
	);
};
