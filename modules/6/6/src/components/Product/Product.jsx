import { useParams, useMatch } from 'react-router-dom';
import { ProductNotFound } from '../404/Product404.jsx';

const fetchProduct = (id) =>
	({
		1: {
			id: 1,
			name: 'TV',
			price: 3000,
			amount: 1,
		},
		2: {
			id: 1,
			name: 'IPhone',
			price: 1000,
			amount: 10,
		},
		3: {
			id: 1,
			name: 'LapTop',
			price: 2000,
			amount: 11,
		},
	})[id];

export const Product = () => {
	const params = useParams();

	const urlMatchData = useMatch('/catalog/product/:id');

	console.log(urlMatchData);

	const product = fetchProduct(params.id);

	if (!product) {
		return <ProductNotFound />;
	}

	const { name, price, amount } = product;

	return (
		<section>
			<h1>Product - {name}</h1>
			<p>Price - {price}</p>
			<p>left - {amount} pieces</p>
		</section>
	);
};
