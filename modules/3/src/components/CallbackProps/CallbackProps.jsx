export const CallbackProps = ({ value, onSetValue }) => {
	return (
		<>
			<div>{value}</div>
			<button onClick={() => onSetValue(value + 1)}>{value} + 1</button>
		</>
	);
};
