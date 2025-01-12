import styles from './RegistrationForm.module.scss';
import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
	.object({
		email: yup.string().email('Неверный email!').required('Email обязателен'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть больше 6 символов')
			.matches(/[A-ZА-Я]/, 'Пароль должен содержать хотя бы одну заглавную букву')
			.required('Пароль обязателен'),
		passwordCopy: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
			.required('Повторите пароль'),
	})
	.required();

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange', // Включение проверки на каждом изменении
	});

	const onSubmit = (data) => console.log(data);

	// Хранение ссылок на кнопку
	const buttonRef = useRef(null);

	// Перемещение фокуса на кнопку после валидации
	useEffect(() => {
		if (isValid) {
			buttonRef.current?.focus();
		}
	}, [isValid]);

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const passwordCopyError = errors.passwordCopy?.message;

	return (
		<div className={styles['form-block']}>
			<h2 className={styles['form-block__title']}>Форма регистрации</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<label className={styles.form__label}>
					{emailError && <span className={styles.error}>{emailError}</span>}
					<input
						type="text"
						className={styles['form__input']}
						placeholder="Введите Email"
						{...register('email', { required: true })}
					/>
				</label>

				<label className={styles.form__label}>
					{passwordError && (
						<span className={styles.error}>{passwordError}</span>
					)}
					<input
						type="password"
						className={styles['form__input']}
						placeholder="Введите пароль"
						{...register('password', { required: true })}
					/>
				</label>

				<label className={styles.form__label}>
					{passwordCopyError && (
						<span className={styles.error}>{passwordCopyError}</span>
					)}
					<input
						type="password"
						className={styles['form__input']}
						placeholder="Повторите введенный пароль"
						{...register('passwordCopy', { required: true })}
					/>
				</label>

				<button
					className={styles['form__btn']}
					type="submit"
					ref={buttonRef}
					disabled={!isValid}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
