import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(1)

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const nextBtnClick = () => {
		if (activeIndex < steps.length) {
			setActiveIndex(activeIndex + 1);
		}
	};

	const prevBtnClick = () => {
		if (activeIndex > 1) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const startOverClick = () => {
		setActiveIndex(1);
	}

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const isFirstStep = activeIndex === 1;
	const isLastStep = activeIndex === steps.length;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>

				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{(steps[activeIndex - 1].content)}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({id, title}, index) => (
							<li className={styles['steps-item']
								+ ' '
								+ (activeIndex > index + 1 ? styles.done : '')
								+ ' '
								+ (activeIndex === index + 1 ? styles.active : '')
							} key={id}>
								<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index+1)}>{index + 1}</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={activeIndex === 1}
							onClick={prevBtnClick}>
							Назад
						</button>
						{/*{activeIndex !== steps.length ? (*/}
						{/*	<button className={styles.button} onClick={nextBtnClick}>*/}
						{/*		Далее*/}
						{/*	</button>*/}
						{/*) : (*/}
						{/*	<button className={styles.button} onClick={startOverClick}>*/}
						{/*		Начать сначала*/}
						{/*	</button>*/}
						{/*)}*/}

						<button className={styles.button}
								onClick={(activeIndex !== steps.length ? nextBtnClick : startOverClick)}
						>
							{(activeIndex !== steps.length ? 'Далее' : 'Начать сначала')}
						</button>

					</div>
				</div>
			</div>
		</div>
	);
};
