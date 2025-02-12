import { Route, Routes } from 'react-router';

import TodoApp from './components/TodoApp';
import TodoInner from './components/TodoInner';
import ServicePage from './components/ServicePage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<TodoApp />} />
				<Route path="/todos/:id" element={<TodoInner />} />
				<Route path="*" element={<ServicePage />} />
			</Routes>
		</>
	);
}

export default App;
