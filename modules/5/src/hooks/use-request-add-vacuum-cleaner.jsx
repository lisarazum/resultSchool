import { useState } from 'react';

export const useRequestAddVacuumCleaner = (refreshProducts) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddVacuumCleaner = () => {
		setIsCreating(true);

		fetch('http://localhost:3005/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify({
				name: 'Vacuum',
				price: 342345,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Response', response);
				refreshProducts();
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return { isCreating, requestAddVacuumCleaner };
};
