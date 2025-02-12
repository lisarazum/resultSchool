async function fetchServer(method, { id, query, ...payload } = {}) {
	let SERVER_URL = 'http://localhost:3005/todos/';

	if (id !== undefined) {
		SERVER_URL += `/${id}`;
	}

	if (query) {
		SERVER_URL += `?${query}`;
	}

	const options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (method !== 'GET' && method !== 'HEAD') {
		options.body = JSON.stringify(payload);
	}

	try {
		const response = await fetch(SERVER_URL, options);

		if (!response.ok) throw new Error(response.statusText);

		return await response.json();
	} catch (err) {
		console.error('Error:', err.message || err);
		return null;
	}
}

export const readTodos = () => fetchServer('GET');
export const createTodo = (newTodo) => fetchServer('POST', newTodo);

export const findTodo = (searchValue) =>
	fetchServer('GET', { query: `q=${searchValue}` });
export const sortTodo = (order) =>
	fetchServer('GET', { query: `_sort=title&_order=${order}` });
export const editTodo = (todoId, newTodo) =>
	fetchServer('PATCH', { id: todoId, ...newTodo });
export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
