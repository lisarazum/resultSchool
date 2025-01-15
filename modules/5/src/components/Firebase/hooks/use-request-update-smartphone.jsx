import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../../firebase.jsx';

export const useRequestUpdateSmartphone = () => {
	const [isUpdating, setIsUpdating] = useState(false);
	const requestUpdatePhone = () => {
		const phoneDbRef = ref(db, 'products/02');
		set(phoneDbRef, {
			name: 'iPhone 8',
			price: 1000,
		})
			.then((response) => {
				console.log('Response Phone', response);
			})
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return { isUpdating, requestUpdatePhone };
};
