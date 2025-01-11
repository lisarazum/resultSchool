import { useState, useRef } from 'react';

export const UseRef = () => {
	const [stateCounter, setStateCounter] = useState(0);

	const refCounter = useRef(0);

	const incrementRefCounter = () => {
		refCounter.current = refCounter.current + 1;
		console.log('refCounter', refCounter);
	};

	const incrementStateCounter = () => {
		setStateCounter(stateCounter + 1);
		console.log('stateCounter', stateCounter + 1);
	};

	return (
		<div>
			<div>UseRef</div>
			<p>refCounter: {refCounter.current}</p>
			<button onClick={incrementRefCounter}>прибавить refCounter</button>
			<p>stateCounter: {stateCounter}</p>
			<button onClick={incrementStateCounter}>прибавить stateCounter</button>
		</div>
	);
};
