import { useState } from 'react';

export const useRequestUpdateSmartphone = (refreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const requestUpdatePhone = () => {
		setIsUpdating(true);

		fetch('http://localhost:3005/products/002', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify({
				name: 'iPhone 8',
				price: 5000,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Response Phone', response);
				refreshProducts();
			})
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return { isUpdating, requestUpdatePhone };
};
