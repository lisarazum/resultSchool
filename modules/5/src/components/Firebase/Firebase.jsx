import {
	useRequestAddVacuumCleaner,
	useRequestUpdateSmartphone,
	useRequestDeleteHairDryer,
	useRequestGetProducts,
} from './hooks';
import { useState } from 'react';
import styles from '../JsonServerGet/JsonServerGet.module.scss';
export const Firebase = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { products, isLoading } = useRequestGetProducts();

	const { isCreating, requestAddVacuumCleaner } = useRequestAddVacuumCleaner();
	const { isUpdating, requestUpdatePhone } =
		useRequestUpdateSmartphone(refreshProducts);
	const { isDeleting, requestDeleteHairDryer } =
		useRequestDeleteHairDryer(refreshProducts);

	return (
		<section>
			<h2>Firebase</h2>
			<div>используем Firebase</div>

			<div className="code">
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					Object.entries(products).map(([id, { name, price }]) => (
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
