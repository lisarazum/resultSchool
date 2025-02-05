const fetchServer = (method, { id, ...payload } = {}) => {
	let url = 'http://localhost:3005/todos/';

	if (id !== undefined) {
		url += `/${id}`;
	}

	const options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (method !== 'GET' && method !== 'HEAD') {
		options.body = JSON.stringify(payload);
	}

	return fetch(url, options).then((jsonData) => jsonData.json());
};

export const readTodos = () => fetchServer('GET');
export const createTodo = (newTodo) => fetchServer('POST', newTodo);
export const updateTodo = (todoData) => fetchServer('PATCH', todoData);
export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
