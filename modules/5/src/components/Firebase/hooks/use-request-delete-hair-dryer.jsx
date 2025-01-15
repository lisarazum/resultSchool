import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../../../firebase.jsx';

export const useRequestDeleteHairDryer = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteHairDryer = () => {
		const tvDbRef = ref(db, 'products/01');

		remove(tvDbRef)
			.then((response) => {
				console.log('Response delete tv', response);
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return { isDeleting, requestDeleteHairDryer };
};
