import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ name, price, initialAmount }) => {
	const [amount, setAmount] = useState(initialAmount);

	return (
		<>
			<div>
				{name} - {price}$
			</div>
			<div>Amount: {amount}</div>
		</>
	);
};

Product.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
};
