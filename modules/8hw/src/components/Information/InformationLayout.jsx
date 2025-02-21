import styles from './InformationLayout.module.scss';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const InformationLayout = () => {
	const [state, setState] = useState(store.getState());

	const { isDraw, isGameEnded, currentPlayer } = state;

	let gameResult = '';
	let currentPlayerStyle = currentPlayer === 'X' ? styles.blue : styles.red;

	if (isDraw) {
		gameResult = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		gameResult = (
			<>
				Победа
				<span className={currentPlayerStyle}> {currentPlayer}</span>
			</>
		);
	} else {
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
