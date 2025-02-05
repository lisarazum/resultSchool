import { useState } from 'react';
export const useRequestAddTodos = () => {
	const [isLoading, setIsLoading] = useState(true);

	fetch('http://localhost:3005/todos').then;
};
