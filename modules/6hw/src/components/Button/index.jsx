import './index.scss';

const Button = ({ children, onClickFunc }) => {
	return (
		<button className="button" onClick={onClickFunc}>
			{children}
		</button>
	);
};

export default Button;
