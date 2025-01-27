import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase.jsx';

export const useRequestGetTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const DBTodos = ref(db);
		onValue(DBTodos, (snapshot) => {
			const loadedData = snapshot.val() || {};
			setTodos(loadedData.todos);
			setIsLoading(false);
		});
	}, [refreshTodosFlag]);

	return { todos, isLoading, setTodos };
};
