import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../../firebase.jsx';

export const useRequestAddVacuumCleaner = () => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddVacuumCleaner = () => {
		const productsDbRef = ref(db, 'products');

		push(productsDbRef, {
			name: 'Dyson',
			price: 123123123,
		})
			.then((response) => {
				console.log('Response: ', response);
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return { isCreating, requestAddVacuumCleaner };
};
