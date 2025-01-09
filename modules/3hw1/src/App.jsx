import './App.css';
import { FieldLayout } from './components/Field/FiledLayout';
import { InformationLayout } from './components/Information/InformationLayout';
import { useState } from 'react';

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

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
			setField(newField);

			const isWin = WIN_PATTERNS.some((pattern) =>
				pattern.every((cellIndex) => newField[cellIndex] === currentPlayer),
			);

			if (isWin) {
				setIsGameEnded(true);
				return;
			}

			if (newField.every((cell) => cell !== '')) {
				setIsDraw(true);
				setIsGameEnded(true);
				return;
			}

			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	}

	function startOver() {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
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
