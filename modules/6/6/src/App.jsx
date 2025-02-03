import './App.css';
import { Routes, Route, NavLink, useMatch } from 'react-router-dom';

import { MainPage } from './components/MainPage/MainPage.jsx';
import { Catalog } from './components/Catalog/Catalog.jsx';
import { Contacts } from './components/Contacts/Contacts.jsx';
import { Product } from './components/Product/Product.jsx';
import { NotFound } from './components/404/404.jsx';

// const ExtendedLink = ({ to, children }) => {
// 	<NavLink to={to}>
// 		{({ isActive }) =>
// 			isActive ? (
// 				<>
// 					<span>{children}</span>
// 					<span>*</span>
// 				</>
// 			) : (
// 				children
// 			)
// 		}
// 	</NavLink>;
// };

function App() {
	return (
		<>
			<h1>6. Маршрутизация</h1>
			<p>импортируем npm install react-router-dom</p>

			<p>Подключаем Роут и Линки в документ</p>
			<p>В ссылках прописывается Link to </p>
			<p>
				Страницы прописываются в Routes - Route path=/ element=Название страницы
			</p>
			<p>Вся страница оборачивается в BrowserRouter </p>

			<h3>Menu</h3>

			<ul>
				<li>
					<NavLink to="/">Main Page</NavLink>
				</li>
				<li>
					<NavLink to="/catalog">Catalog</NavLink>
				</li>
				<li>
					<NavLink to="/contacts">Contacts</NavLink>
				</li>
			</ul>

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/catalog" element={<Catalog />}>
					<Route path="product/:id" element={<Product />} />
					<Route path="service/:id" element={<Product />} />
				</Route>
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
