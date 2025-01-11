import { useState } from 'react';

export const Select = () => {
	const [selectedGoods, setSelectedGoods] = useState('tv');
	const [selectedColors, setSelectedColors] = useState(['black', 'white']);

	const onSelectedGoodChange = ({ target }) => setSelectedGoods(target.value);

	const onSelectedColorsChange = ({ target }) => {
		const newSelectedColors = [...target.selectedOptions].map(
			(selectedTarget) => selectedTarget.value,
		);

		setSelectedColors(newSelectedColors);
	};

	return (
		<>
			<div>
				Select:
				<select value={selectedGoods} onChange={onSelectedGoodChange}>
					<option value="tv">TV</option>
					<option value="laptop">Laptop</option>
					<option value="Phone">Phone</option>
				</select>
			</div>
			<div>
				MultiSelect
				<select
					multiple={true}
					value={selectedColors}
					onChange={onSelectedColorsChange}
				>
					<option value="black">black</option>
					<option value="white">white</option>
					<option value="silver">silver</option>
					<option value="gold">gold</option>
				</select>
			</div>
		</>
	);
};
