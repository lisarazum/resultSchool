import { useState } from 'react';

export const Validation = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		let error = null;

		if (!/^[\w_]*$/.test(target.value)) {
			error = 'Неверный логин. Допустимые символы - буквы, цифры и _.';
		} else if (target.value.length > 20) {
			error = 'Неверный логин. Максимальное количество 20 символов.';
		}

		setLoginError(error);
	};

	const onLoginBlur = () => {
		if (login.length < 3) {
			setLoginError('Неверный логин. Минимальная длина 3 символа.');
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(login);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{loginError && <div className="error">{loginError}</div>}
				<input
					type="text"
					name="login"
					placeholder="login"
					value={login}
					onChange={onLoginChange}
					onBlur={onLoginBlur}
				/>

				<button type="submit" disabled={loginError !== null}>
					Send
				</button>
			</form>
		</>
	);
};
