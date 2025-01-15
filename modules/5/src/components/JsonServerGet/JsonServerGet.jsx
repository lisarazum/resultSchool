import { useEffect, useState } from 'react';
import styles from './JsonServerGet.module.scss';

export const JsonServerGet = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/products')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProductsFlag]);

	// POST запрос
	const requestAddVacuumCleaner = () => {
		setIsCreating(true);
		setIsLoading(true);

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
				setIsLoading(false);
			});
	};

	//UPDATE = PUT
	const requestUpdatePhone = () => {
		setIsUpdating(true);
		setIsLoading(true);

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
				setIsLoading(false);
			});
	};

	//Delete
	const requestDeleteHairDryer = () => {
		setIsDeleting(true);
		setIsLoading(true);

		fetch('http://localhost:3005/products/003', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Response delete hairdryer', response);
				refreshProducts();
			})
			.finally(() => {
				setIsDeleting(false);
				setIsLoading(false);
			});
	};

	return (
		<section>
			<h2>JsonServerGet</h2>
			<div>
				Используем JSON Server
				<br />В корне папки прописываем базу данных <code>db.json</code>
			</div>
			<div>
				включить сервер:{' '}
				<code>json-server --watch db.json --port 3005 --delay 2500</code>
			</div>
			<ul>
				<li>
					<b>--port 3005</b> - проставит другой порт
				</li>
				<li>
					<b>--delay 2500</b> - поставит задержку
				</li>
			</ul>

			<div className="code">
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					products.map(({ id, name, price }) => (
						<div key={id}>
							{name} - {price}руб
						</div>
					))
				)}

				<button
					onClick={requestAddVacuumCleaner}
					disabled={isCreating || isUpdating || isDeleting}
				>
					Добавить пылесос
				</button>
				<button
					onClick={requestUpdatePhone}
					disabled={isCreating || isUpdating || isDeleting}
				>
					Обновить телефон
				</button>
				<button
					onClick={requestDeleteHairDryer}
					disabled={isCreating || isUpdating || isDeleting}
				>
					Удалить фен
				</button>
			</div>
		</section>
	);
};
