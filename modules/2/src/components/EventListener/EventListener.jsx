import { useState } from 'react';

export const EventListener = () => {
	const onClickFunction = () => {
		console.log('click');
		setShowText(!showText);
	};

	const [value, setValue] = useState(0);
	const [showText, setShowText] = useState(true);

	return (
		<>
			<button onClick={onClickFunction}>Click on me</button>

			<div>
				<div>{value}</div>
				<button onClick={() => setValue(value + 1)}>Add 1</button>
			</div>

			{/*	Условный рендеринг*/}
			{showText && <div>Текст</div>}

			<button onClick={onClickFunction}>
				{showText ? 'сркыть' : 'показать'} текст
			</button>
		</>
	);
};
