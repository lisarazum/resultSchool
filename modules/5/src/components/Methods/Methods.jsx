import { useState } from 'react';
import {
	useRequestGetProducts,
	useRequestAddVacuumCleaner,
	useRequestUpdateSmartphone,
	useRequestDeleteHairDryer,
} from './hooks.jsx';
import { Loader } from './Loader.jsx';
import { ProductList } from './ProductList.jsx';

export const Methods = () => {
	const [refreshProducts, setRefreshProducts] = useState(false);
	const { products, isLoading } = useRequestGetProducts(refreshProducts);

	const { requestAddVacuumCleaner, isCreating } = useRequestAddVacuumCleaner(
		refreshProducts,
		setRefreshProducts,
	);

	const { requestUpdateSmartphone, isUpdating } = useRequestUpdateSmartphone(
		refreshProducts,
		setRefreshProducts,
	);

	const { requestDeleteHairDryer, isDeleting } = useRequestDeleteHairDryer(
		refreshProducts,
		setRefreshProducts,
	);

	return (
		<div>
			<h2>Методы разделены на разные файлы</h2>
			<div className="code">
				{isLoading ? <Loader /> : <ProductList products={products} />}
				<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
					Добавить пылесос
				</button>
				<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
					Обновить смартфон
				</button>
				<button disabled={isDeleting} onClick={requestDeleteHairDryer}>
					Удалить фен
				</button>
			</div>
		</div>
	);
};
