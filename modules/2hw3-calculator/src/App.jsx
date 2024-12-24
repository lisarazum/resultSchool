import styles from './App.module.css';
import { useState } from 'react';

function App() {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	// состояния
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	//functions
	const numberBtnClick = (e) => {
		if (result === '') {
			if (operand1 === '' || (operand1 !== '' && operator === '')) {
				setOperand1(operand1 + e.target.innerText);
			} else if (operand1 !== '' && operator !== '') {
				setOperand2(operand2 + e.target.innerText);
			}
		} else if (result !== '') {
			setOperand1(e.target.innerText);
			setOperand2('');
			setOperator('');
			setResult('');
		}
	};

	const operatorBtnClick = (e) => {
		setOperator(e.target.innerText);
	};

	const clearBtnClick = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	};

	const sumBtnClick = () => {
		let sum = 0;

		if (operand1 !== '' && operator !== '' && operand2 !== '') {
			if (operator === '+') {
				sum = Number(operand1) + Number(operand2);
			} else if (operator === '−') {
				sum = Number(operand1) - Number(operand2);
			}

			setResult(sum);
		}
	};

	return (
		<div id={styles.wrapper}>
			<div id={styles.app}>
				<div data-reactroot="" className={styles.calculator}>
					<div className={styles['calculator-display']}>
						{result === '' ? (
							<>
								{operand1 !== '' ? operand1 : '0'}
								{operator !== '' ? operator : ''}
								{operand2 !== '' ? operand2 : ''}
							</>
						) : (
							<div className={styles.result}>{result}</div>
						)}
					</div>
					<div className={styles['calculator-keypad']}>
						<div className={styles['input-keys']}>
							<div className={styles['digit-keys']}>
								{NUMS.map((number, index) =>
									number === '0' ? (
										<button
											className={`${styles['calculator-key']} ${styles['key-0']}`}
											key={index}
											onClick={numberBtnClick}
										>
											{number}
										</button>
									) : (
										<button
											className={styles['calculator-key']}
											key={index}
											onClick={numberBtnClick}
										>
											{number}
										</button>
									),
								)}
							</div>
						</div>
						<div className={styles['operator-keys']}>
							<button
								className={styles['calculator-key']}
								onClick={clearBtnClick}
							>
								C
							</button>
							<button
								className={styles['calculator-key']}
								onClick={operatorBtnClick}
							>
								−
							</button>
							<button
								className={styles['calculator-key']}
								onClick={operatorBtnClick}
							>
								+
							</button>
							<button
								className={styles['calculator-key']}
								onClick={sumBtnClick}
							>
								=
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
