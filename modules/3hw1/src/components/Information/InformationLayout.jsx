import PropTypes from 'prop-types';
import styles from './InformationLayout.module.scss';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	let gameResult = '';
	let currentPlayerStyle = currentPlayer === 'X' ? styles.blue : styles.red;

	if (isDraw === true) {
		gameResult = 'Ничья';
	} else if (isDraw !== true && isGameEnded === true) {
		gameResult = (
			<>
				Победа
				<span className={currentPlayerStyle}> {currentPlayer}</span>
			</>
		);
	} else if (isDraw !== true && isGameEnded === false) {
		gameResult = (
			<>
				Ходит
				<span className={currentPlayerStyle}> {currentPlayer}</span>
			</>
		);
	}

	return <h3>{gameResult}</h3>;
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
