import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const fieldsScheme = yup.object().shape({
	login: yup
		.string()
		.matches(
			/^[\w_]*$/,
			'Должны использоваться буквы, цифры и нижнее подчеркивание!!!!',
		)
		.max(10, 'Должно быть меньше 10 символов')
		.min(3, 'Должно быть больше 3 символов'),
});

export const HookForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldsScheme),
	});

	const loginError = errors.login?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div>{loginError}</div>}
				<input type="text" name="login" {...register('login')} />
				<button type="submit" disabled={!!loginError}>
					Отправить
				</button>
			</form>
		</>
	);
};
