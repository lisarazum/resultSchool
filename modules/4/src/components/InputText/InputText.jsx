import { useState } from 'react';

export const InputText = () => {
	const [value, setValue] = useState('');
	return (
		<>
			<div>контролируемое поле ввода имеет value=''</div>
			<div>Ввод данных в любое поле формы обрабатывается с помощью onChange</div>
			<input
				type="text"
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</>
	);
};
