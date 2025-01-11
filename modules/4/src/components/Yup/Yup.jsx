import * as yup from 'yup';
import { useState, useRef } from 'react';

const loginChangeScheme = yup
	.string()
	.matches(/^[\w_]*$/, 'Неверный логин. Допустимые символы - буквы, цифры и _.')
	.max(5, 'Неверный логин. Максимальное количество 5 символов.');

const loginBlurScheme = yup
	.string()
	.min(3, 'Неверный логин. Минимальная длина 3 символа.');

const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null;

	try {
		scheme.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join('\n');
	}

	return errorMessage;
};

export const Yup = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const submitButtonRef = useRef(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

		setLoginError(error);

		if (target.value.length === 5) {
			submitButtonRef.current.focus();
		}
	};

	const onLoginBlur = () => {
		const error = validateAndGetErrorMessage(loginBlurScheme, login);

		setLoginError(error);
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

				<button
					ref={submitButtonRef}
					type="submit"
					disabled={loginError !== null}
				>
					Send
				</button>
			</form>
		</>
	);
};
