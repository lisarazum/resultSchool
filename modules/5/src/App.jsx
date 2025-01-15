import './App.css';
import { UseEffect } from './components/UseEffect/UseEffect.jsx';
import { BackendMock } from './components/BackendMock/BackendMock.jsx';
import { Methods } from './components/Methods/Methods.jsx';
import { UserHooks } from './components/UserHooks/UserHooks.jsx';
import { JsonServerGet } from './components/JsonServerGet/JsonServerGet.jsx';
import { Firebase } from './components/Firebase/Firebase.jsx';

function App() {
	return (
		<>
			<h1>5. Запросы к серверу</h1>
			<UseEffect />

			<BackendMock />

			<Methods />

			<JsonServerGet />

			<UserHooks />

			<Firebase />
		</>
	);
}

export default App;
