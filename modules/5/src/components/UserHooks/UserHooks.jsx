import {
	useRequestAddVacuumCleaner,
	useRequestUpdateSmartphone,
	useRequestDeleteHairDryer,
	useRequestGetProducts,
} from '../../hooks';
import { useState } from 'react';
import styles from '../JsonServerGet/JsonServerGet.module.scss';
export const UserHooks = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { products, isLoading } = useRequestGetProducts(refreshProductsFlag);
	const { isCreating, requestAddVacuumCleaner } =
		useRequestAddVacuumCleaner(refreshProducts);
	const { isUpdating, requestUpdatePhone } =
		useRequestUpdateSmartphone(refreshProducts);
	const { isDeleting, requestDeleteHairDryer } =
		useRequestDeleteHairDryer(refreshProducts);

	return (
		<section>
			<h2>UserHooks</h2>
			<div>хуки распределены по папкам</div>

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
