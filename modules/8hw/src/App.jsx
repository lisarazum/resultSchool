import './App.css';
import { FieldLayout } from './components/Field/FiledLayout';
import { InformationLayout } from './components/Information/InformationLayout';
import { store } from './store';
import { useState, useEffect } from 'react';

function App() {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		// Подписываемся на изменения в store
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		// Отписка при размонтировании
		return () => unsubscribe();
	}, []);

	const { currentPlayer, isGameEnded, isDraw, field } = state;

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	function handleCellClick(index) {
		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;

			store.dispatch({ type: 'SET_FIELD', payload: newField });

			const isWin = WIN_PATTERNS.some((pattern) =>
				pattern.every((cellIndex) => newField[cellIndex] === currentPlayer),
			);

			if (isWin) {
				store.dispatch({ type: 'SET_GAME_ENDED' });
				return;
			}

			if (newField.every((cell) => cell !== '')) {
				store.dispatch({ type: 'SET_DRAW' });
				return;
			}

			store.dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: currentPlayer === 'X' ? 'O' : 'X',
			});
		}
	}

	function startOver() {
		store.dispatch({ type: 'RESTART_GAME' });
	}

	return (
		<>
			<h1>tic tac toe</h1>
			<InformationLayout
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<FieldLayout field={field} onCellClick={handleCellClick} />

			{isGameEnded ? (
				<button onClick={() => startOver()}>Начать заново</button>
			) : null}
		</>
	);
}

export default App;
