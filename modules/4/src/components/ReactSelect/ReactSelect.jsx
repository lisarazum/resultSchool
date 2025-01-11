import Select from 'react-select';

const productOptions = [
	{ value: 'tv', label: 'Tv' },
	{ value: 'phone', label: 'Phone' },
	{ value: 'laptop', label: 'Laptop' },
];

const colorOptions = [
	{ value: 'black', label: 'black' },
	{ value: 'white', label: 'white' },
	{ value: 'silver', label: 'silver' },
];
export const ReactSelect = () => {
	return (
		<>
			<Select options={productOptions} defaultValue={productOptions[0]} />
			<Select
				isMulti
				options={colorOptions}
				defaultValue={[colorOptions[0], colorOptions[1]]}
			/>
		</>
	);
};
