import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/styles.scss';
import Hw1 from './pages/Hw1/Hw1.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Hw1 />
	</StrictMode>,
);
