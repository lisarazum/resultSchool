import styles from './FieldLayout.module.scss';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.table}>
			{field.map((cell, index) => {
				const cellStyle = cell === 'X' ? styles.blue : 'О' ? styles.red : '';

				return (
					<div
						key={index}
						className={`${styles.tableCell} ${cellStyle}`}
						onClick={() => onCellClick(index)}
					>
						{cell}
					</div>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
