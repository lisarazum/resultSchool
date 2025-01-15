import { useState, useEffect } from 'react';
export const useRequestGetProducts = (refreshProducts) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/products')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProducts]);

	return { products, isLoading };
};

export const useRequestAddVacuumCleaner = (refreshProducts, setRefreshProducts) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddVacuumCleaner = () => {
		setIsCreating(true);

		fetch('http://localhost:3005/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Пылесос',
				price: 4690,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Пылесос добавлен, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsCreating(false));
	};

	return { requestAddVacuumCleaner, isCreating };
};

export const useRequestUpdateSmartphone = (refreshProducts, setRefreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateSmartphone = () => {
		setIsUpdating(true);

		fetch('http://localhost:3005/products/002', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Смартфон',
				price: 17900,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Смартфон обновлён, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateSmartphone, isUpdating };
};

export const useRequestDeleteHairDryer = (refreshProducts, setRefreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteHairDryer = () => {
		setIsDeleting(true);

		fetch('http://localhost:3005/products/003', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удалён, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteHairDryer, isDeleting };
};
