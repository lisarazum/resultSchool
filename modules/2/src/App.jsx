import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { MyComponent } from './components/MyComponent/MyComponent';
import { List } from './components/List/list';
import { EventListener } from './components/EventListener/EventListener.jsx';
import { CssModules } from './components/CssModules/CssModules.jsx';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Viasdte + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<MyComponent />
			<List />
			<EventListener />
			<CssModules />
		</>
	);
}

export default App;