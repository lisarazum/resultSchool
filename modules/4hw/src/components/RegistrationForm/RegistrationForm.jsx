import styles from './RegistrationForm.module.scss';
import { useState, useRef, useEffect } from 'react';

export const RegistrationForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCopy, setPasswordCopy] = useState('');
	const [emailError, setEmailError] = useState(true);
	const [passwordError, setPasswordError] = useState(true);
	const [passwordCopyError, setPasswordCopyError] = useState(true);

	const buttonRef = useRef(null);

	const onEmailChange = ({ target }) => {
		setEmail(target.value);

		let error = null;

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)) {
			error = 'Неверный email.';
		}

		setEmailError(error);
	};

	const onPasswordChange = ({ target }) => {
		setPassword(target.value);

		let error = null;

		if (target.value.length < 6) {
			error = 'Пароль должен быть больше 6 символов';
		} else if (!/[A-ZА-Я]/.test(target.value)) {
			error = 'Пароль должен содержать хотя бы одну заглавную букву';
		}

		setPasswordError(error);
	};

	const onPasswordCopyChange = ({ target }) => {
		setPasswordCopy(target.value);

		let error = null;

		if (password !== target.value) {
			error = 'Пароли не совпадают';
		}

		setPasswordCopyError(error);
	};

	useEffect(() => {
		if (!emailError && !passwordError && !passwordCopyError) {
			buttonRef.current.focus();
		}
	}, [emailError, passwordError, passwordCopyError]);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ email: email, password: password });
	};

	return (
		<div className={styles['form-block']}>
			<h2 className={styles['form-block__title']}>Форма регистрации</h2>

			<form className={styles.form} onSubmit={onSubmit}>
				<label className={styles.form__label}>
					{emailError && <span className={styles.error}>{emailError}</span>}
					<input
						type="text"
						className={styles['form__input']}
						value={email}
						onChange={onEmailChange}
						placeholder="Введите Email"
					/>
				</label>
				<label className={styles.form__label}>
					{passwordError && (
						<span className={styles.error}>{passwordError}</span>
					)}
					<input
						type="password"
						className={styles['form__input']}
						value={password}
						onChange={onPasswordChange}
						placeholder="Введите пароль"
					/>
				</label>

				<label className={styles.form__label}>
					{passwordCopyError && (
						<span className={styles.error}>{passwordCopyError}</span>
					)}
					<input
						type="password"
						className={styles['form__input']}
						value={passwordCopy}
						onChange={onPasswordCopyChange}
						placeholder="Повторите введенный пароль"
					/>
				</label>

				<button
					className={styles['form__btn']}
					type="submit"
					ref={buttonRef}
					disabled={(emailError || passwordError || passwordCopyError) !== null}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
