import { useState, useEffect } from 'react';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/todos')
			.then((rawResponse) => rawResponse.json())
			.then((response) => setTodos(response))
			.catch((error) => console.error(`${error} - while getting the Todos`))
			.finally(() => setIsLoading(false));
	}, []);

	return { todos, isLoading };
};
